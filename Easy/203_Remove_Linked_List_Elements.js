var removeElements = function (head, val) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let current = dummy;

    while (current.next !== null) {

        if (current.next.val === val) {
            // Node ko remove karo
            current.next = current.next.next;
        } else {
            // Next node par jao
            current = current.next;
        }
    }

    return dummy.next;
};