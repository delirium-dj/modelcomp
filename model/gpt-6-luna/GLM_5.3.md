# GPT-6 Luna — findings by GLM 5.3

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's most efficient GPT-6-family model for focused, high-volume tasks — the value tier below GPT-6 Sol and Astra. Top use case: cheap, high-volume reasoning with a 1M window.
- **Provider / access:** OpenAI Responses API + Chat Completions `gpt-6-luna`; also on OpenCode Zen `opencode/gpt-6-luna` (`https://opencode.ai/zen/v1/responses`).
- **Release / knowledge:** 2026 (after the 2026-05-18 knowledge cutoff; exact release date not re-verified publicly). Knowledge cutoff 2026-05-18.
- **IDs:** `openai/gpt-6-luna` (no Free ID on Zen; paid tier).
- **Context window:** 1,050,000 total — 922K max input / 128K max output (OpenAI docs). Verified on the official model page.
- **Modalities:** text and image in / text out; reasoning yes (`reasoning.effort` none/low/medium/high/xhigh/max, reasoning tokens); tool calls yes (function calling + Responses built-in tools: web_search, file_search, code_interpreter, hosted_shell, computer_use, mcp, apply_patch, skills); structured outputs yes; no audio/video (Realtime/Live endpoints not supported).
- **Pricing (as of 2026-09-25):** $0.10 in / $0.50 out per 1M; cached input $0.01 (10%), cache writes $0.125; prompts >272K input priced 2x input / 1.5x output for the full request; Batch/Flex at 50% (OpenAI pricing page, mirrored on Zen: $0.10/$0.50 ≤272K, $0.20/$0.75 above).
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 / 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **normalized 43.4%** (BenchLM; ≈1368 Elo on the (Elo-500)/2000 scale — mid-to-upper band)
- GDP.pdf: **20.4%** (BenchLM, all-pass)
- ExploitGym (cyber agentic): **11.6%** (BenchLM)
- Claw-Eval / Toolathlon / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **38.5%** (BenchLM, AA-HLE)
- LCR / MLCR: AA-LCR **83.3%** (BenchLM); MLCR no verified public score found
- CritPt: **19.4%** (BenchLM)
- ARC-AGI-1 **86.7%**, ARC-AGI-2 **59.3%**, ARC-AGI-3 **0.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **37.3** (BenchLM)
- Omniscience: Index **0.7**, Accuracy **43.8%**, hallucination-rate field **76.7%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- HealthBench: raw **50.0%**, length-adjusted **54.5%**, Professional **60.8%**, Hard **31.4%** (BenchLM)

Coding:

- DeepSWE: **66.6%** (BenchLM; frontier ref 74%+)
- AA-SciCode: **54.6%** (BenchLM)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR 83.3% (BenchLM) at the 1.05M window; no MRCR/RULER/GraphWalks per-length data — no long-context retrieval score found.

Multimodal:

- AA-MMMU-Pro: **75.5%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 68/100.** Full Responses tool surface (computer_use, mcp, hosted_shell) is verified and GDPval-AA ≈1368 Elo is above the mid band, but ExploitGym 11.6% is weak and no TB/Tau/Toolathlon numbers exist.
- **Reasoning: 78/100.** AA-HLE 38.5% sits at the frontier line, AA-LCR 83.3% and ARC-AGI-1 86.7% are strong, but ARC-AGI-3 0.1%, CritPt 19.4%, an AA Index of 37.3 and weak Omniscience (0.7) hold it back.
- **Context window: 96/100.** 1.05M window (922K in / 128K out) verified = ≥1M tier; AA-LCR 83.3% solid but not ≥98% retrieval.
- **Multimodal: 68/100.** Text+image in, text out (image tier); AA-MMMU-Pro 75.5% is good, no video/audio input or non-text output.
- **Coding: 72/100.** DeepSWE 66.6% and AA-SciCode 54.6% are competitive value-tier results, but no SWE-bench Verified/LiveCodeBench rows exist.
- **Cost efficiency: 96/100.** $0.10/$0.50 per 1M with $0.01 cached reads sits just under the ~$0.10/$0.20 (97–99) anchor; batch at 50% improves it further.
- **Overall Score: 76/100.** Half-up mean of the five quality dims (68+78+96+68+72)/5 = 76.4 → 76 — the best cost-per-reasoned-token pick for high-volume 1M-context work; escalate to Sol/Astra for hard agentic tasks.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (OpenAI model docs, BenchLM, OpenCode Zen pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
