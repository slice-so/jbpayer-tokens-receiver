// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./utils/juiceboxV2/JBETHERC20ProjectPayer.sol";
import "@openzeppelin/contracts/interfaces/IERC1155Receiver.sol";
import "@openzeppelin/contracts/interfaces/IERC1155.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";

/** 
  Extension of`JBETHERC20ProjectPayer` with added logic to receive ERC1155 tokens and transfer ERC1155/ERC20 tokens.

  @dev Minimal implementation to integrate with Slice protocol.
*/
contract JBETHERC20ProjectPayerERC1155Receiver is JBETHERC20ProjectPayer, IERC1155Receiver {
    //*********************************************************************//
    // -------------------------- constructor ---------------------------- //
    //*********************************************************************//

    /**
     * @param _defaultProjectId The ID of the project whose treasury should be forwarded this contract's received payments.
     * @param _defaultBeneficiary The address that'll receive the project's tokens.
     * @param _defaultPreferClaimedTokens A flag indicating whether issued tokens should be automatically claimed into the beneficiary's wallet.
     * @param _defaultMemo A memo to pass along to the emitted event, and passed along the the funding cycle's data source and delegate.  A data source can alter the memo before emitting in the event and forwarding to the delegate.
     * @param _defaultMetadata Bytes to send along to the project's data source and delegate, if provided.
     * @param _defaultPreferAddToBalance A flag indicating if received payments should call the `pay` function or the `addToBalance` function of a project.
     * @param _directory A contract storing directories of terminals and controllers for each project.
     * @param _owner The address that will own the contract.
     */
    constructor(
        uint256 _defaultProjectId,
        address payable _defaultBeneficiary,
        bool _defaultPreferClaimedTokens,
        string memory _defaultMemo,
        bytes memory _defaultMetadata,
        bool _defaultPreferAddToBalance,
        IJBDirectory _directory,
        address _owner
    )
        JBETHERC20ProjectPayer(
            _defaultProjectId,
            _defaultBeneficiary,
            _defaultPreferClaimedTokens,
            _defaultMemo,
            _defaultMetadata,
            _defaultPreferAddToBalance,
            _directory,
            _owner
        )
    {}

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
