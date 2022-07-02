// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./JBETHERC20ProjectPayerClone.sol";
import "@openzeppelin/contracts/interfaces/IERC1155Receiver.sol";
import "@openzeppelin/contracts/interfaces/IERC1155.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";

/** 
  Clone implementation of `JBETHERC20ProjectPayerERC1155Receiver`
*/
contract JBETHERC20ProjectPayerERC1155ReceiverClone is
    JBETHERC20ProjectPayerClone,
    IERC1155Receiver
{
    //*********************************************************************//
    // ------------------------- public views -------------------------- //
    //*********************************************************************//

    /**
    @notice
    Indicates if this contract adheres to the specified interface.

    @dev 
    See {IERC165-supportsInterface}.

    @param _interfaceId The ID of the interface to check for adherance to.
  */
    function supportsInterface(bytes4 _interfaceId)
        public
        view
        virtual
        override(JBETHERC20ProjectPayerClone, IERC165)
        returns (bool)
    {
        return
            _interfaceId == type(IJBProjectPayer).interfaceId ||
            super.supportsInterface(_interfaceId);
    }

    //*********************************************************************//
    // --------------------------- functions =---------------------------- //
    //*********************************************************************//

    /**
     * @notice Hook called when ERC1155 tokens are received
     */
    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    /**
     * @dev See `onERC1155Received`
     */
    function onERC1155BatchReceived(
        address,
        address,
        uint256[] memory,
        uint256[] memory,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }

    /**
     * @notice Transfer ERC1155 tokens to a specified address.
     *
     * @dev Can only be called by contract owner.
     */
    function _safeTransferERC1155To(
        IERC1155 erc1155,
        address to,
        uint256 id,
        uint256 amount
    ) external onlyOwner {
        erc1155.safeTransferFrom(address(this), to, id, amount, "");
    }

    /**
     * @notice Transfer ERC20 tokens to a specified address.
     *
     * @dev Can only be called by contract owner.
     */
    function _transferERC20To(
        IERC20 erc20,
        address to,
        uint256 amount
    ) external onlyOwner {
        erc20.transfer(to, amount);
    }
}
