# Space Bunny Alpha — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenRouter (stealth/space-bunny-alpha), Hugging Face community blog (karmen-beatapi), SMF Clearinghouse, AMBER/askclaw.dev
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha
- **Short description:** Anonymous stealth large model on OpenRouter/OpenCode with blazing-fast inference, strong coding, native multimodal input, adjustable reasoning effort, 1M context window. Provider undisclosed.
- **Provider / access:** OpenRouter (`stealth/space-bunny-alpha`, OpenAI-compatible); OpenCode Go route. Stealth model — third-party provider anonymous, prompts may be retained but not used for training. No Free ID on Zen (noFreeId: true).
- **Release / knowledge:** Released September 23, 2026 (OpenRouter, SMF Clearinghouse catalog). Knowledge cutoff undisclosed ("My model name, maker, and knowledge cutoff are all undisclosed" per identity probe).
- **IDs:** `stealth/space-bunny-alpha` (OpenRouter). Parameter count not disclosed.
- **Context window:** 1,000,000 tokens (1M) per OpenRouter and SMF Clearinghouse; max output 524,288 tokens per SMF Clearinghouse.
- **Modalities:** Text, images, and video input; text output per OpenRouter and SMF Clearinghouse; adjustable reasoning effort.
- **Pricing (as of 2026-10-17):** $0/$0 per 1M per SMF Clearinghouse catalog (free); OpenRouter listing does not display pricing.
- **Architecture:** Proprietary — parameter count and architecture not disclosed; stealth model with anonymous provider.

### Raw benchmarks found

Agent / tool use:
- SMF Official A board: **128/157 (81.5%)** thinking off, 0 errors (SMF Clearinghouse, Sep 25, 2026)
- Tool calling: **2/2** (SMF Clearinghouse)
- AMBER tool_calling/Ops: **5/6** (1 NA) (askclaw.dev AMBER, W39)
- Wall time: 48.3 min (2896.6s) for 157 tests (SMF Clearinghouse)

Reasoning / knowledge:
- SMF Official A reasoning: **24/30** (SMF Clearinghouse)
- SMF math: **23/30** (SMF Clearinghouse)
- SMF instruction: **28/30** (SMF Clearinghouse)
- GPQA Diamond: not reported
- HLE: not reported
- AMBER Vision: **0/1** (askclaw.dev AMBER)
- AMBER UI: **1/1** (askclaw.dev AMBER)
- Text + image + video input per OpenRouter/SMF; text output.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** SMF tool calling 2/2, coding 23/30, instruction 28/30, AMBER Ops 5/6, Delivery 2/3. Capped by AMBER Vision 0/1 and limited independent tool-use benchmark coverage.
- **Reasoning: 78/100.** SMF reasoning 24/30, math 23/30, instruction 28/30. HF community notes strong long-agent sessions and long-context retrieval. Capped by limited formal reasoning benchmark coverage (no GPQA, HLE, MMLU reported).
- **Context window: 95/100.** Verified 1M context (OpenRouter + SMF Clearinghouse); max output 524K. Capped only because no public retrieval score measured at full 1M window.
- **Multimodal: 65/100.** Text + image + video input; SMF prose 23/30, writing 5/5. Capped by AMBER Vision 0/1 and limited independent multimodal benchmark data.
- **Coding: 75/100.** SMF coding 23/30, AMBER Coding 4/6, AMBER Ops 5/6. HF community reports strong iterative builds but shaky first drafts on geometry/terrain. Capped by limited formal coding benchmark coverage.
- **Cost efficiency: 100/100.** Free ($0/$0 per SMF Clearinghouse catalog). Not counted toward Overall.
- **Overall Score: 78.2/100.** Half-up mean of (78 + 78 + 95 + 65 + 75) / 5 = 78.2 → 78. Best-fit recommendation: a capable free stealth model with 1M context for long agent sessions and multimodal tasks; verify on formal benchmarks before production use given stealth status and limited independent scoring.

### Conflicts vs existing meta.json / queued average

- meta.json for this folder needs to be checked separately.
- Context window: OpenRouter lists 1M, SMF Clearinghouse confirms 1M/max out 524,288 — consistent.
- Pricing: OpenRouter doesn't display pricing; SMF Clearinghouse lists $0/$0 — consistent with free stealth model.
- AMBER reports 13/24 cases (CommandCode provider) vs SMF 128/157 (81.5%) — different harnesses, not directly comparable but both indicate mid-tier performance.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (OpenRouter + Hugging Face community blog + SMF Clearinghouse + AMBER/askclaw.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
- MMLU: not reported

Coding:
- SMF Official A coding: **23/30** (SMF Clearinghouse)
- AMBER Coding: **4/6** (askclaw.dev AMBER)
- AMBER Delivery: **2/3** (askclaw.dev AMBER)
- AMBER Ops: **5/6** (1 NA) (askclaw.dev AMBER)

Long context:
- 1M context declared; no public needle-recall score at full window found.

Multimodal:
- SMF prose: **23/30** (SMF Clearinghouse)
- SMF writing: **5/5** (SMF Clearinghouse)
- AMBER Vision: **0/1** (askclaw.dev AMBER)
- AMBER UI: **1/1** (askclaw.dev AMBER)
- Text + image + video input per OpenRouter/SMF; text output.