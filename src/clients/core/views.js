// File: views.js
const {Client} = require('../client');

/**
 * Represents the Views API methods.
 * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/}
 */
class Views extends Client {
  constructor(options) {
    super(options);
    this.jsonAPINames = ['views', 'view'];
  }

  /**
   * Lists shared and personal views available to the current user.
   * @returns {Promise<object>} A promise that resolves to the list of views.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#list-views}
   * @example
   * const views = await client.views.list();
   */
  async list() {
    return this.getAll(['views']);
  }

  /**
   * Lists active shared and personal views available to the current user.
   * @returns {Promise<object>} A promise that resolves to the list of active views.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#list-active-views}
   * @example
   * const activeViews = await client.views.listActive();
   */
  async listActive() {
    return this.getAll(['views', 'active']);
  }

  /**
   * A compacted list of shared and personal views available to the current user.
   * @returns {Promise<object>} A promise that resolves to the compact list of views.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#list-views-compact}
   * @example
   * const compactViews = await client.views.listCompact();
   */
  async listCompact() {
    return this.getAll(['views', 'compact']);
  }

  /**
   * Shows details of a specific view.
   * @param {number} viewID - The ID of the view to retrieve.
   * @returns {Promise<{response: object, result: object}>} A promise that resolves to the details of the view.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#show-view}
   * @example
   * const viewDetails = await client.views.show(12345);
   */
  async show(viewID) {
    return this.get(['views', viewID]);
  }

  /**
   * Creates a new view.
   * @param {object} view - The view data to create.
   * @returns {Promise<{response: object, result: object}>} A promise that resolves to the created view details.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#create-view}
   * @example
   * const newView = {
   *   title: "My New View",
   *   conditions: {...}
   * };
   * const createdView = await client.views.create(newView);
   */
  async create(view) {
    return this.post(['views'], view);
  }

  /**
   * Updates an existing view by its ID.
   * @param {number} viewID - The ID of the view to update.
   * @param {object} viewData - The updated view data.
   * @returns {Promise<{response: object, result: object}>} A promise that resolves to the updated view details.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#update-view}
   * @example
   * const updatedData = {
   *   title: "Updated View Title"
   * };
   * const updatedView = await client.views.update(12345, updatedData);
   */
  async update(viewID, viewData) {
    return this.put(['views', viewID], viewData);
  }

  /**
   * Executes a specific view by its ID.
   * @param {number} viewID - The ID of the view to execute.
   * @param {object} parameters - Additional parameters for execution.
   * @returns {Promise<object>} A promise that resolves to the executed view results.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#execute-view}
   * @example const executedView = await client.views.execute(12345, {sort_by: 'status'});
   */
  async execute(viewID, parameters) {
    return this.getAll(['views', viewID, 'execute', parameters]);
  }

  /**
   * Retrieves tickets from a specific view by its ID.
   * @param {number} viewID - The ID of the view.
   * @returns {Promise<object>} A promise that resolves to the list of tickets from the view.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#list-tickets-from-a-view}
   * @example const ticketsFromView = await client.views.tickets(12345);
   */
  async tickets(viewID) {
    return this.getAll(['views', viewID, 'tickets']);
  }

  /**
   * Previews a new view without saving it.
   * @param {object} parameters - Additional parameters for execution.
   * @returns {Promise<object>} A promise that resolves to the previewed view results.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#preview-view}
   * @example
   * const viewData = {
   *   title: "Preview View",
   *   conditions: {...}
   * };
   * const previewResults = await client.views.preview(viewData);
   */
  async preview(parameters) {
    return this.requestAll('POST', ['views', 'preview'], parameters);
  }

  /**
   * Retrieves the count of tickets for a specific view.
   * @param {number} viewID - The ID of the view to count tickets for.
   * @returns {Promise<{response: object, result: object}>} A promise that resolves to the ticket count for the view.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#show-view-count}
   * @example const ticketCount = await client.views.showCount(12345);
   */
  async showCount(viewID) {
    return this.get(['views', viewID, 'count']);
  }

  /**
   * Retrieves the ticket counts for multiple views.
   * @param {Array<number>} viewIDs - An array of view IDs to count tickets for.
   * @returns {Promise<{response: object, result: object}>} A promise that resolves to the ticket counts for the specified views.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#show-multiple-view-counts}
   * @example const ticketCounts = await client.views.showCounts([12345, 67890]);
   */
  async showCounts(viewIDs) {
    return this.get(['views', 'count_many', {ids: viewIDs}]);
  }

  /**
   * Exports views to a JSON file.
   * @param {number} viewID - The ID of the view to export.
   * @returns {Promise<{response: object, result: object}>} A promise that resolves to the exported views in JSON format.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#export-view}
   * @example const exportedViews = await client.views.export([12345, 67890]);
   */
  async export(viewID) {
    return this.get(['views', viewID, 'export']);
  }

  /**
   * Retrieves all active shared views.
   * @returns {Promise<{response: object, result: object}>} A promise that resolves to the list of all active shared views.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#list-active-shared-views}
   */
  async listActiveShared() {
    return this.get(['views', 'shared']);
  }

  /**
   * Retrieves the view's execution status.
   * @param {number} viewID - The ID of the view to check the execution status for.
   * @returns {Promise<{response: object, result: object}>} A promise that resolves to the execution status of the view.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#show-view-execution-status}
   */
  async showExecutionStatus(viewID) {
    return this.get(['views', viewID, 'execution_status']);
  }

  /**
   * Retrieves the view's recent ticket IDs.
   * @param {number} viewID - The ID of the view to retrieve recent ticket IDs for.
   * @returns {Promise<{response: object, result: object}>} A promise that resolves to the recent ticket IDs of the view.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#show-view-recent-ticket-ids}
   */
  async showRecentTicketIDs(viewID) {
    return this.get(['views', viewID, 'recent_ticket_ids']);
  }

  /**
   * Deletes a specific view by its ID.
   * @param {number} viewID - The ID of the view to delete.
   * @returns {Promise<object>} A promise that resolves when the view is deleted.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#delete-view}
   */
  async delete(viewID) {
    return this.delete(['views', viewID]);
  }

  /**
   * Reorders views based on the provided order.
   * @param {Array<number>} viewOrder - An array of view IDs in the desired order.
   * @returns {Promise<{response: object, result: object}>} A promise that resolves when the views are reordered.
   * @see {@link https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#reorder-views}
   */
  async reorder(viewOrder) {
    return this.put(['views', 'reorder'], {view_order: viewOrder});
  }
}

exports.Views = Views;
