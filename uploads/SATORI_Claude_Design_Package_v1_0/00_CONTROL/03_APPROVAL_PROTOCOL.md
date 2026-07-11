# Approval Protocol

## Mandatory gate

Claude Design must stop after every phase and wait for explicit user approval.

## Valid approval examples

- Akceptuję.
- Approved.
- Przejdź do następnego etapu.
- Zatwierdzam etap 4.

## Not valid approval

- looks good but...
- maybe
- continue with these changes
- silence
- a new question
- partial comments without explicit confirmation

## Revision loop

When changes are requested:

1. list requested changes,
2. implement only those changes unless another issue is critical,
3. re-run the phase checklist,
4. provide a revision summary,
5. ask for explicit approval again,
6. stop.

## Locking rule

After approval, the phase is locked.

A locked phase may be altered only if:

- the user requests it,
- a later phase reveals a critical contradiction,
- accessibility requires it,
- or implementation feasibility makes it necessary.

Every alteration to a locked phase must be disclosed.
