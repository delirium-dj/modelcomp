# GPT-6.1 Sol — findings by Space Bunny Alpha

- Source: OpenAI / GPT-6.1 Sol
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (report covers the `max` reasoning variant, the one Artificial Analysis evaluates; a non-reasoning variant may also exist)
- **Short description:** OpenAI's 2026-09-29 refresh of the GPT-6 Sol tier — a step change in agentic and terminal performance over GPT-6 Sol at roughly the GPT-6 Sol price, and a far cheaper way to approach GPT-6 Astra's capability. It is a distinct model from GPT-6 Sol, GPT-6 Astra and GPT-6 Luna.
- **Provider / access:** OpenAI API (Responses API; 6 providers route it per Artificial Analysis). Proprietary weights.
- **Release / knowledge:** Released **2026-09-29** (Artificial Analysis release page and FAQ; models.dev records the same date for release and update). Knowledge cutoff not published in any source found.
- **Context window:** **1,050,000 tokens** with **128,000 max output** (models.dev); Artificial Analysis reports the class as 1M. Verified as a metadata field, not by a retrieval test.
- **Modalities:** Text and image input, text output. Reasoning: yes. Tools and structured output supported (models.dev records reasoning, tool calling and structured output; `temperature: No`).
- **Pricing (as of 2026-09-30):** **$2.00 input / $10.00 output per 1M tokens**, cache discount 95%. Blended at the 7:2:1 cache-hit/input/output ratio this is **$1.47 per 1M tokens**. Artificial Analysis measures **$0.72 per Intelligence Index task** — versus $3.26 for GPT-6 Astra. That is roughly a quarter of GPT-5.6 Sol's $4/$20 and a fifth of GPT-5.5's $5/$30.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count or architecture.

### Raw benchmarks found

> Artificial Analysis figures are the `max` reasoning variant and are the most complete independent measurement available. The model shipped one day before this report, so the public record is thin and the vendor has published no launch table.

Artificial Analysis (Intelligence Index v4.3.2 — AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1):

- Intelligence Index: **52** — ranked **#11 of 223**, against a median of 26 for its price class.
- Cost per Intelligence Index task: **$0.72**.
- Output speed: **66.2 tokens/s** (#109 of 223; class median 72.1).
- Time to first token: **272.81 s** at max effort (class median 3.99 s) — a direct consequence of the reasoning budget, not of a slow network path.
- Output tokens consumed on the Index: **67M** (#48 of 223; class median 82M) — i.e. comparatively concise, which Latent Space's summary of the AA release puts at **10–30% more output tokens than GPT-6 Sol**.
- Versus GPT-6 Sol, Artificial Analysis reports a **+12 point gain on Terminal-Bench 4.0** and a **+5 point gain on HLE**, with the hallucination rate falling from **60% to 54%**.

Independent third-party figures (llm-stats aggregation):

- DeepSWE v1.1: **75.2%**.
- OSWorld 2.0: **71.4%**.
- HealthBench: **58.5%**; HealthBench Professional: **64.2%**; HealthBench Consensus: **96.0%**.

Measurement caveat worth recording:

- **Harness sensitivity is unresolved.** Latent Space reports that independent Codex-harness runs of GPT-6.1 Sol scored substantially higher than Artificial Analysis's `mini-swe-agent` runs, and that Artificial Analysis disputes the bump and has asked the publisher about repeat counts. Any Terminal-Bench or DeepSWE number for this model should be read with the harness named.

Not found:

- GPQA Diamond, CritPt value, AA-LCR value, SciCode value, LiveCodeBench, SWE-bench Verified / Pro, ARC-AGI, and any vendor benchmark table: **no verified public score found** for this exact model.

### Normalized scores (1–100)

- **Tool use: 85/100.** The strongest part of the release: a **+12 point jump on Terminal-Bench 4.0** over GPT-6 Sol, **OSWorld 2.0 at 71.4%**, and an AutomationBench-AA component inside a 52-point Intelligence Index that ranks #11 of 223 — all agentic, tool-driven workloads. It is held below the 90+ band because the Index (52) sits under the methodology's 60+ frontier reference and the harness dispute above makes Terminal-Bench figures unstable.
- **Reasoning: 86/100.** A **+5 point HLE gain** over GPT-6 Sol and a hallucination rate dropping from 60% to 54% are meaningful improvements in knowledge reliability, on a 52-point Index that is 2× the class median. Not higher because no GPQA Diamond, CritPt or AA-LCR value is published for this model, and because at max effort the 272.81 s TTFT is a real usability tax on interactive work.
- **Context window: 95/100.** 1,050,000 verified tokens puts it in the ≥1M band (95–100). Not 100: the methodology reserves that for ≥98% measured retrieval at 512K+, and no long-context recall test has been run against this model — unlike GPT-6 Astra, which OpenAI disclosed at 96.3% recall across its own window.
- **Multimodal: 65/100.** Verified text and image input with text-only output places it in the +image band (60–70). No audio input, no video input, no non-text output.
- **Coding: 89/100.** **DeepSWE v1.1 at 75.2%** clears the methodology's frontier reference (DeepSWE 74%+), and the Terminal-Bench 4.0 gain is the single largest improvement in the release. Held just under 90 because SciCode, LiveCodeBench and SWE-bench numbers are all absent for this exact model, so only one frontier coding reference is on the record.
- **Cost efficiency: 78/100.** **$2.00/$10.00** with a 95% cache discount and a blended **$1.47/M** sits between the methodology's ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 rungs, closer to the expensive side. The measured **$0.72 per Intelligence Index task** — versus $3.26 for GPT-6 Astra — is a genuine Pareto result and lifts it well above a pure price-lookup, as does the 67M-token Index run being *shorter* than the 82M class median.
- **Overall Score: 84/100.** (85 + 86 + 95 + 65 + 89) / 5 = 420 / 5 = 84.0 → **84**. Best fit for terminal-heavy agentic work and long-context analysis where per-task cost matters: it buys most of GPT-6 Astra's capability at a quarter of the price per task. Two cautions — pick a lower reasoning effort than `max` for anything interactive (272.81 s TTFT), and treat third-party Terminal-Bench numbers as harness-dependent until the dispute above is settled.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-30
- Method: Artificial Analysis's GPT-6.1 Sol (max) model page (Intelligence Index v4.3.2, cost per task, output speed, TTFT, token use, technical specifications), the AA v4.3.2 methodology description, models.dev's record for `openai/gpt-6.1-sol`, the llm-stats comparison figures, and Latent Space's AINews summary of the AA release (Terminal-Bench/HLE deltas, hallucination rate, token verbosity, harness dispute). The model released one day before this report, so OpenAI has published no launch benchmark table. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.1_Sol_Harness_Independent.md`, using the same headings — ideally once more reasoning-effort variants and a long-context recall test are measured.