export default function WorkOrderModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>

        <h2>Submit Work Order</h2>

        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="3b040a7f-7d53-430c-a6f9-4105b2eceedd" />

          <input type="text" name="name" placeholder="Full Name" required />
          <input type="text" name="contact" placeholder="Phone or Email" required />
          <input type="text" name="appliance" placeholder="Appliance" required />
          <textarea name="issue" placeholder="Describe issue" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}