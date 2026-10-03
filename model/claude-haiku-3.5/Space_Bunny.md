# Claude Haiku 3.5 — findings by Space Bunny

- Source: Anthropic (`claude-3-5-haiku`, snapshot `claude-3-5-haiku-20241022`; also catalogued as `opencode/claude-3-5-haiku` on OpenCode)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5 (Claude 3.5 Haiku)
- **Short description:** Anthropic's fast, cheap small model from October 2024 — positioned as "state-of-the-art meets affordability and speed", matching or beating the much larger Claude 3 Opus on many intelligence benchmarks at Haiku-class latency, with standout coding ability for its tier. Now **deprecated/retired**: it is absent from Anthropic's current models overview, from OpenCode Zen's live catalog, and from OpenRouter's model list, and it has been superseded by Claude Haiku 4.5 (2025-10-15) and the 2026 Claude 4.x/5.x line. Not an alias of any currently listed entry; the entry is retained here as a historical tracking record.
- **Provider / access:** Originally the Anthropic API (`claude-3-5-haiku-20241022`), Amazon Bedrock and Google Vertex AI. Historical OpenCode route `opencode/claude-3-5-haiku`; models.dev records it as `status = "deprecated"`, described as "Legacy model retained for compatibility with older integrations". No live provider endpoint is verified as of 2026-10-03.
- **Release / knowledge:** Released **2024-10-22**. Knowledge cutoff **July 2024** (models.dev `knowledge = "2024-07-31"`; Artificial Analysis states Jul 1, 2024 — the two differ by days and are recorded as given).
- **IDs:** `claude-3-5-haiku-20241022` (Anthropic snapshot), `claude-3-5-haiku` (API alias), `opencode/claude-3-5-haiku` (OpenCode route). No Zen Free ID; the OpenCode stub's `contextWindow: "128K total"` is wrong — the verified window is 200K.
- **Context window:** **200,000 tokens** with **8,192 max output** (models.dev OpenCode provider TOML, verified 2026-10-03); Artificial Analysis independently lists a 200k context window. The 8,192 output cap is well under the methodology's 64K caveat threshold.
- **Modalities:** text, **image** and **PDF** input; text output; tool calling supported; temperature control; **no reasoning / extended-thinking support** (`reasoning = false` in the models.dev record; Artificial Analysis: "not a reasoning model").
- **Pricing (as of 2026-10-03):** **$0.80 in / $4.00 out per 1M**, with cache read $0.08 and cache write $1.00 (models.dev). Anthropic revised this price on 2024-12-03 down from launch levels, and the post explicitly states "The model is now priced at $0.80 MTok input / $4 MTok output". Paid only, and now list-only — the model is no longer sold. Artificial Analysis shows $0.00 because it tracks only providers still serving the model, and none do.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count or architecture.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **40.6%** (Anthropic launch post, 2024-10-22 — "it scores 40.6% on SWE-bench Verified, outperforming many agents using publicly available state-of-the-art models—including the original Claude 3.5 Sonnet and GPT-4o")
- Tool use: explicitly cited by Anthropic as more accurate than the previous Haiku generation ("more accurate tool use, … well suited for user-facing applications")
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found
- Computer use (OSWorld line): **not available** — Anthropic debuted computer use with Claude 3.5 **Sonnet**, not Haiku 3.5; Haiku 3.5 has no GUI/computer-use capability

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **9** (**estimated**, model marked deprecated; AA continues benchmarking only the default 10k-input-token workload), ranked **#105 / 300** among non-reasoning models — above the 7 median for its class
- Anthropic's qualitative claim, not a number: Claude 3.5 Haiku "matches the performance of Claude 3 Opus … on many evaluations" and "surpasses even Claude 3 Opus … on many intelligence benchmarks"
- GPQA Diamond / HLE / LCR / CritPt / MMLU / MMMU: no verified public score found in retrievable text (the launch post's comparison chart is an image asset)
- Non-reasoning by design: no extended thinking, so the reasoning-heavy benchmarks above would not be representative even if published

Coding:

- SWE-bench Verified **40.6%** (see above) — the single strongest verified number for this model
- SciCode / LiveCodeBench / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found
- Anthropic's framing: "Claude 3.5 Haiku is particularly strong on coding tasks" for its tier

Long context:

- No MRCR / RULER / GraphWalks retrieval result at any window length found. The 200K window and the $0.08 cache-read rate are capacity and price facts, not retrieval-quality measurements; with an 8,192 output cap this model is not built for long-generation work.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` (v4). Overall = half-up
> mean of the five quality dims; Cost efficiency is scored but never counted.

- **Tool use: 52/100.** Tool calling is supported and Anthropic called out improved tool-use accuracy at launch, but the only quantified agentic evidence is SWE-bench Verified **40.6%**, which is a software-engineering score rather than a tool-use one, and it sits below the methodology's TB2.1 45–60% mid band. Terminal-Bench, Tau3, GDPval-AA and Claw-Eval are all absent, and the 8,192-token output cap throttles long tool loops. Not scored lower: the model beat GPT-4o and the original Claude 3.5 Sonnet on that SWE-bench run at 2024-era pricing.
- **Reasoning: 35/100.** AA Intelligence Index **9** (estimated) is only modestly above the 7 median for non-reasoning models in its price tier, and the model has **no reasoning mode at all** (`reasoning = false`). With no GPQA, HLE, LCR or CritPt figure published, there is no path to the methodology's mid band (GPQA 60–80% / Index 20–35 → 55–65); an Index of 9 sits inside that 20–35 band's floor. Deliberately conservative: the AA number is an *estimate* on a deprecated model, so it is treated as a floor-plus signal rather than a measurement.
- **Context window: 68/100.** Verified 200,000 total maps to the 200K–500K = 65–84 band, whose stated anchor is 200K = 70. Placed just under the anchor because the **8,192 max output** is far below the methodology's 64K caveat threshold and no retrieval-quality result exists at any window length — this is a long-*input*, short-output model.
- **Multimodal: 82/100.** Text, image and PDF input with text output: image input plus PDF pushes it into the 75–90 band rather than the 60–70 plain-image band. Not higher: output is text-only, there is no video or audio path, and the vision/PDF path has no published evaluation in retrievable text.
- **Coding: 55/100.** SWE-bench Verified **40.6%** is a real, dated, first-party number and was genuinely strong for a small fast model in October 2024 (above GPT-4o at the time), but it is far below both the methodology's mid band (TB2.1 45–60%) and its frontier anchors (TB2.1 85%+, DeepSWE 74%+). Held here rather than lower because the score is verifiable and above the floor for the class; capped there because SciCode, LiveCodeBench and the Coding Index are all missing.
- **Cost efficiency: 92/100.** $0.80 in / $4.00 out per 1M with a $0.08 cache-read rate is right at the methodology's ~$0.60/$2.20 ≈ 92 anchor — a genuinely cheap rate card. Not scored as free despite Artificial Analysis showing $0.00: no provider currently serves this model, so the price is historical and the entry is unreachable in practice.
- **Overall Score: 58.4/100.** Mean of (52 + 35 + 68 + 82 + 55) / 5 = 58.4. Best understood as a historical artifact rather than a live recommendation: a cheap, fast, image/PDF-capable Haiku for latency-bound classification and extraction, now fully superseded by Claude Haiku 4.5, which carries a 200K window, extended thinking and far higher benchmark scores.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-03
- Method: public internet research (Anthropic's official launch announcement for the SWE-bench figure and pricing revision, the models.dev OpenCode provider record for the full spec block, Artificial Analysis's model page for the Intelligence Index, knowledge cutoff and deprecation status, and Wikipedia's Claude model table for the release/discontinuation dates); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_4.5.md`, using the same headings.