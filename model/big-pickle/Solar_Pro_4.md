# Big Pickle — findings by Solar Pro 4



- Source: opencode/Big Pickle, e.g. opencode (`opencode/big-pickle`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (Free-stealth tier)
- **Short description:** A proprietary coding-optimized LLM served through OpenCode Zen as a free stealth model during a feedback-collection period. The model's true identity is officially unconfirmed; leaked provider errors and API response signatures suggest DeepSeek infrastructure, but this is treated as a signal rather than a confirmed fact. It is optimized for software engineering agent workloads including chat-based completions.
- **Provider / access:** OpenCode Zen (`opencode/big-pickle`) via OpenAI-compatible Chat Completions endpoint. No Responses API support.
- **Release / knowledge:** Released 2025-10-17; knowledge cutoff unknown (possibly 2025-01, unverified).
- **IDs:** `opencode/big-pickle` (free during current stealth period; no paid tier announced)
- **Context window:** 200K tokens total (input + output combined); max output 32K tokens. Verified via provider documentation and model intelligence aggregators.
- **Modalities:** Text in / text out; no image, audio, video, or PDF input. Reasoning: yes (supported). Tool calls: yes. JSON mode / structured output: yes. No attachments support.
- **Pricing (as of 2026-09-18):** Free during current stealth/feedback period. No published per-token price; no end date or post-stealth pricing announced. Data from free-period prompts may be used to improve the model per OpenCode Zen's terms.
- **Architecture:** Proprietary. Exact parameter count, MoE structure, and open-weights status unknown. Identity unconfirmed (possible DeepSeek infrastructure based on leaked API signatures, but unverified).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE Atlas Codebase QnA (Mini-SWE-Agent scaffold): **50.8%** (63/124 tasks resolved, single trial, self-reported on 2026-08-11; ±4.5% single-trial standard error). Uses Scale's official harness v0.18.0 with Harbor sandboxes, mini-swe-agent v2.4.6, and claude-opus-4-5-20251101 as judge. Strict lower bound treating unscored rubrics as failures: 49.2% (61/124). Still ahead of all other Mini-SWE-Agent scaffold entries on the official leaderboard as of 2026-07-28. Source: PhillipChaffee/big-pickle-swe-atlas (GitHub, MIT-licensed configs and verifier logs) and glonce.com analysis.
- Terminal-Bench 2.1: no verified public score found for Big Pickle alias. Proxied from GLB-4.6: **49.4%** (BenchmarkList, https://benchmarklist.com/models/z-ai-glm-4.6). Provisional.
- Tau3-Banking / Tau2-Bench: no verified public score found for Big Pickle alias. Proxied from GLB-4.6: **10.5%** Tau3 (BenchmarkList). Also benchlm.ai reports **76.9%** Tau2 for GLM-4.6 — significant harness discrepancy noted. Provisional.
- GDPval-AA: no verified public score found for Big Pickle alias. Proxied from GLB-4.6: **934** (BenchmarkList). Provisional.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: SWE Atlas QnA covered above

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for `opencode/big-pickle` alias directly. Proxied from GLB-4.6: **63.2%** (BenchLM, https://benchlm.ai/models/glm-4-6). Provisional — alias identity unconfirmed.
- HLE: no verified public score found for Big Pickle alias. Proxied from GLB-4.6: **5.5%** (BenchLM). Provisional.
- LCR / MLCR: no verified public score found for Big Pickle alias. Proxied from GLB-4.6: **28.3%** (BenchLM). Provisional.
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for Big Pickle alias. Proxied from GLB-4.6: **53.94 overall, #107/411** (BenchLM). Provisional.
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for Big Pickle alias. Proxied from GLB-4.6: **0.68** (ApX, https://apxml.com/models/glm-46). Note: SWE Atlas (QnA) is a different benchmark covered under Agent/tool use. Provisional.
- LiveCodeBench: no verified public score found for Big Pickle alias. Proxied from GLB-4.6: **81.0%** (BenchmarkList, https://benchmarklist.com/models/z-ai-glm-4.6). Provisional.
- SciCode / AA-SciCode: no verified public score found for Big Pickle alias. Proxied from GLB-4.6: **38.4%** (BenchmarkList). Provisional.
- Vibe Code Bench: no verified public score found for Big Pickle alias. Proxied from GLB-4.6: **3.1%** (BenchmarkList). Provisional.
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval benchmark (MRCR / RULER / GraphWalks) publicly reported for this model.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the six.

- **Tool use: 55/100.** Direct SWE Atlas Codebase QnA (Mini-SWE-Agent scaffold) at 50.8% (63/124 tasks, single trial, self-reported 2026-08-11) places this in mid-range tool-use territory. Proxied GLB-4.6 benchmarks show TB2.1 49.4%, Tau3 10.5%, GDPval 934 — all consistent with mid-tier agent capability. Capped by absence of higher-stakes tool benchmarks (Tau3-Banking, GDPval-AA, OSWorld) on the actual Big Pickle alias; proxy benchmarks from GLB-4.6 are acknowledged as fallible since the alias identity is unconfirmed.
- **Reasoning: 60/100.** proxied GLB-4.6 benchmarks: GPQA Diamond 63.2%, HLE 5.5%, LCR 28.3%, Artificial Analysis Intelligence Index 53.94 (#107/411). These place the model in the 55–65 mid-tier reasoning band. Capped by heavy reliance on proxied rather than direct Big Pickle reasoning benchmarks; no direct GPQA/HLE/CritPt scores confirmed for the `opencode/big-pickle` alias specifically.
- **Context window: 70/100.** 200K token context window per OpenCode Zen and models.dev documentation. This falls in the 200K–500K tier (scored 65–84), with 200K mapping to 70. Max output 32K noted as a caveat but not a separate penalty. Significantly below the 1M tier (95–100) achieved by competitors like Muse Spark 1.3 and MiMo-V2.5-Pro.
- **Multimodal: 15/100.** Text-only model: no image, audio, video, or PDF input support confirmed. Per methodology, text-only models score 10–20; 15 reflects confirmed text-only I/O with no multimodal capability available.
- **Coding: 70/100.** Direct SWE Atlas Codebase QnA 50.8% (Mini-SWE-Agent) is the primary direct evidence. Proxied GLB-4.6 benchmarks: LiveCodeBench 81.0%, SciCode 38.4%, Vibe Code Bench 3.1%, SWE-bench 0.68. LiveCode at 81% would normally suggest higher, but the very low Vibe (3.1%) and SciCode (38.4%) pull the score to mid-70s. Capped by mixed proxy signals and the fact that SWE Atlas (QnA) is a different task than SWE-bench Verified (repo-level issue fixing); single-trial standard error ±4.5% on the direct eval.
- **Cost efficiency: 100/100.** $0 input/output during the current free stealth period on OpenCode Zen. No published per-token pricing exists; the model is free while the provider collects user feedback. Capped only by the time-limited nature of the free tier and the data-usage caveat (free-period prompts may be used to improve the model per OpenCode Zen terms).
- **Overall Score: 62/100.** Mean of (55 + 60 + 70 + 15 + 70 + 100) / 6 = 61.7 → **62**. Best-fit recommendation: zero-cost daily driver for coding agent workflows during the stealth period; escalate to Muse Spark 1.3 Free (Overall 95) or MiMo V2.5 Free (Overall 82) when higher tool-use reliability, longer context, or multimodal capability is needed. Re-verify scores if/when the stealth period ends or the alias is remapped to a different underlying model.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (modelcompare.dev), independent benchmark write-ups (glonce.com), and published evaluation repos (GitHub: PhillipChaffee/big-pickle-swe-atlas); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3_6_Flash.md`, using the same headings.


