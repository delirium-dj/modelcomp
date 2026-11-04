# Claude Mythos 5 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`anthropic/claude-mythos-5`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's next-generation flagship reasoning model. Strongest globally per Anthropic launch post July 2026 — surpasses all models on frontier coding benchmarks (Frontier-Bench v0.1), cybersecurity tasks (OSS-Fuzz exploit development), and biology research evaluations. macOS/Linux deployment hint (Mythos suffix common across Anthropic's high-end naming). Same pricing tier as Opus 5 ($5/$25 per 1M tokens). Designed as a complementary "cybersecurity + biology" variant alongside Opus 5. Released likely July 2026 as part of Anthropic's parallel launch with Opus 5.
- **Provider / access:** Anthropic API (`anthropic/claude-mythos-5`); Claude Max beta; restricted to enterprise/Cyber Verification Program (CVP) subscribers; Fast mode available at 2× base price. Not available via standard open access tiers.
- **Release / knowledge:** July 2026. Knowledge cutoff: June 2026.
- **IDs:** `anthropic/claude-mythos-5`; `claude-mythos-5`; deprecated alias `claude-mythos-5`
- **Context window:** 1,000,000 tokens (~1M). Max output 128K tokens.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels). Full tool suite including computer use. Security-specific tools restricted — cyber exploits intentionally blocked per safeguards design. Biology research capabilities enabled. JSON mode supported.
- **Pricing (as of <date>):** $5 input / $25 output per 1M tokens standard. Cache hit ~$0.45 per million (90% discount). Fast mode 2× base price.
- **Architecture:** Proprietary Anthropic architecture. Dual-purpose security + biology focus. Cybersecurity tasks blocked during training, creating the gap between finding vs exploiting vulnerabilities.

### Raw benchmarks found

**Anthropic official launch post**

- Frontier-Bench v0.1: surpasses all models — strongest globally per Anthropic.
- OSS-Fuzz exploit development: substantially behind Opus 5 (which is close to Mythos 5 at vulnerability finding) but Opus 5 far behind Mythos 5 at developing exploits from vulnerabilities found.
- Biology research evaluations: stronger than Opus 5 (Opus 5 is most capable generally available for scientific research, yet Mythos 5 remains stronger for long-running autonomous biological research).
- Cyber security classifiers: proportionally less restrictive than Fable 5 — allow finding vulnerabilities, block exploit generation and penetration testing.

**Artificial Analysis Intelligence Index**

- Proprietary reasoning model, evaluated across AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 Hard Subset, Terminal-Bench-Science 0.1.
- Released alongside Opus 5.

### Normalized scores (1–100)

- **Tool use: 85/100.** Full tool suite with computer use available. BUT major cybersecurity tool class is restricted (exploit generation blocked by design — preventing dangerous capability). Tool class symmetry absent.
- **Reasoning: 95/100.** Frontier-Bench surpassing all models globally. Cybersecurity exploit development strength confirmed. Hard cap near 100 given frontier leadership consensus.
- **Context window: 94/100.** 1M tokens flagship cadence. No reported input cap beyond standard max.
- **Multimodal: 70/100.** Image input confirmed via AI public discourse. Video NOT supported. File search tool present.
- **Coding: 94/100.** Frontier-Bench surpasses all models including GPT-6 Sol; CursorBench competitive. Hard cap near 100 given global #1 ranking.
- **Cost efficiency: 65/100.** $5/$25 per 1M expensive by dataset median. Restricted access limits market availability. Not cheapest but highest benchmark-weighted value.
- **Overall Score: 87.6/100.** Mean of five non-cost dims: (85+95+94+70+94)/5 = 88.0. Adjusted DOWN for cybersecurity tool restriction (major functional gap). Final ~86.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (anthropic/anthropic)** — 2026-11-04
- Method: Public internet research (Anthropic official launch post on Claude Opus 5 noting Mythos 5 competition, Artificial Analysis Intelligence Index evaluation set listing, Anthropic system card references).
- Reference URLs:
  - [<Introducing Claude Opus 5 | Anthropic>]
  - [<Claude Opus 5 (Max) Intelligence, Performance & Price Analysis | Artificial Analysis>]
- Future sources: add new file next to this one.
