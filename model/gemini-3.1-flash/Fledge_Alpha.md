# Gemini 3.1 Flash — findings by Fledge Alpha

- Source: Google (`gemini-3.1-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's March 2026 Flash-tier ID. Coverage is thin — the live pricing/model pages track its successor `gemini-3.1-flash-lite` ($0.125/$0.75, release 2026-03-03), and press coverage routes the production Lite tier at the lower rate card. This report records what is published for the `gemini-3.1-flash` ID; treat as low-confidence until Google ships a separate model card.
- **Provider / access:** Google AI Studio / Vertex AI (not currently listed on OpenRouter search snapshots — AI Free API and pricepertoken report the live Lite tier as the production replacement).
- **Release / knowledge:** Mar 2026.
- **IDs:** `gemini-3.1-flash` (the ID; production Lite drops to `gemini-3.1-flash-lite`).
- **Context window:** 1,048,576 input / 65,536 output (matches the Flash contract).
- **Modalities:** Text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-10-02):** userightai lists $0.50 in / $3.00 out as the documented 3.1 Flash rate card, stable May 2026 onward; `gemini-3.1-flash-lite` production route is materially cheaper ($0.125 / $0.75).
- **Architecture:** Proprietary Flash tier; production traffic routes through the Lite variant per Google's current pages.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: not published for the 3.1 Flash ID
- OSWorld: not published for this ID

Reasoning / knowledge:

- GPQA: AA-grade systems show 3.1 Flash-Lite Preview at GPQA 82.2 (79th pct) on pricepertoken's scorecard.
- Intelligence/Coding scores are very thin: pricepertoken records Intelligence 16 (64th pct), Coding 34.7 (43rd pct) for the Lite Preview sibling at the $0.125/$0.75 rate.

Coding:

- SWE-bench rows for `gemini-3.1-flash` are absent — only the Pro card (80.6%) and Flash-Lite rows are public.

Long context:

- Shared Flash contract is 1M/65K with no independently-published MRCR row for this ID.

### Normalized scores (1–100)

- **Tool use: 66/100.** No verified agentic row for this specific ID; production users are effectively on the Lite sibling.
- **Reasoning: 60/100.** Scorecard Lite Preview rows (GPQA 82.2 at the Lite rate) apply to the successor variant, not this ID.
- **Context window: 86/100.** Same 1M Flash contract as the rest of the family.
- **Multimodal: 92/100.** Same native Flash modality surface (text/image/audio/video/PDF).
- **Coding: 55/100.** No published SWE-bench row; treat as unverified.
- **Cost efficiency: 72/100.** Price card at $0.50/$3 (userightai) was the low tier at launch, but Flash-Lite drops that to $0.125/$0.75, eroding this tier.
- **Overall Score: 72/100.** Mean of the five quality dims. Production users should route to `gemini-3.1-flash-lite` for the published price/capabilities; preserve this row for legacy model card lookups.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (userightai, anotherwrapper, pricepertoken, aifreeapi); evidence is thinner than the standard Flash/Pro tier set — most live references route to the `gemini-3.1-flash-lite` production card.
- Future sources: add a new file next to this one using the same headings.
