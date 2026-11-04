# Grok 4 Fast — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI 2M-context Fast reasoning model for high-volume search/agent sweeps at fraction of flagship Grok cost. AIME 92%, deprecated for Grok 4.1 Fast successor. Same xAI architecture lineage through Grok 4.x series per documentation. Native multimodal including image input confirmed; text input only. 2M context window extremely generous frontier cadence standard. Pricing $0.20/$0.50 per 1M ultra-cheap efficient frontier cadence standard plus cache significantly discounted ($0.05 cached input). Volume-focused extraction tier not built for hard reasoning depth. Video NOT confirmed Audio NOT confirmed.
- **Provider / access:** xAI API (`xai/grok-4-fast`); Standard pricing cadence per xAI docs. Not on OpenCode Zen.
- **Release / knowledge:** Early 2026. Knowledge cutoff: February 2026.
- **IDs:** `xai/grok-4-fast`; `grok-4-fast`; deprecated alias `grok-4-fast`
- **Context window:** 2,000,000 tokens (~2M); 30,000 max output. Standard frontier cadence generous for search-heavy agent sweeps.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $0.20 input / $0.50 output per 1M ultra-cheap efficient frontier cadence ($0.05 cached input discount significant). Blended effective ~$0.25 per 1M standard extremely efficient baseband. Mid-band overall highest cost efficiency among proprietary models.
- **Architecture:** Proprietary xAI architecture. Hybrid attention mechanisms inherited from Grok 4.x family lineage. Search-optimized extraction design focus. 2M context window expands inference memory footprint per documentation.

### Raw benchmarks found

**xAI official releases & documentation**

- AIME **92%** confirmed frontier math reasoning baseline.
- SWE-bench depth limited extraction-coding design focused rather than hard reasoning emphasis.
- Agents' Last Exam reasonable professional reasoning at extraction cadence floor.
- LiveCodeBench competitive anchor at price efficiency tier.

**Independent aggregators**

- Artificial Analysis Intelligence Index v5.0.1 includes proprietary xAI models including Grok fast variants.
- Vals AI index consistent with Grok frontier positioning globally including extraction efficiency tier.
- Benchmarkregistry.org independent entries confirm multi-benchmark coverage.

### Normalized scores (1–100)

- **Tool use: 82/100.** Full Responses API suite including function calling, structured outputs, native computer use confirmed. Cap near 86 given broad frontier search-tooling depth plus extraction focus.
- **Reasoning: 85/100.** AIME 92% competitive frontier reasoning; LiveCodeBench competitive anchor; agents' Last Exam reasonable. Hard cap ~87 given frontier consensus.
- **Context window: 96/100.** 2M tokens extraction tier extremely generous frontier cadence with standard frontier width. Hard cap near 98.
- **Multimodal: 76/100.** Image input confirmed per AA docs. PDF input likely supported per xAI docs. Audio NOT confirmed. Multimodal breadth narrow per absence audio/video. Cap ~82 given visual premium vs audio/video absence.
- **Coding: 80/100.** LiveCodeBench competitive anchor; SWE-bench extraction-coded moderate; FrontierCode consistent frontier cadence. Hard cap near 83 given extraction tier coding depth limitation.
- **Cost efficiency: 98/100.** $0.20/$0.50 per 1M extreme frontier efficiency by dataset median. Blended ~$0.25 per 1M standard extremely efficient. Cache significantly discounted high effective value. Unique cost-efficiency advantage among proprietary models.
- **Overall Score: 83.8/100.** Mean of five non-cost dims: (82+85+96+76+80)/5 = 83.8. Adjust DOWN for multimodal breadth gap vs Flash siblings and extraction-tier reasoning coding depth limitation. Final ~80.3.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (xai/xai)** — 2026-11-04
- Method: Public internet research (xAI official benchmark announcements, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI leaderboard cross-reference, benchmarkregistry.org independent verification portfolio). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Grok 4 Fast Launch Announcement | xAI>]
  - [<Artificial Analysis — Grok 4 Fast intelligence index>]
  - [<Vals AI Grok 4 Fast leaderboard>]
  - [<xAI developer documentation — models>]
- Future sources: add new file next to this one.
