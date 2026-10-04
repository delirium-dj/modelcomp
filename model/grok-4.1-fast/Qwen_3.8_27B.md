# Grok 4.1 Fast — findings by Qwen 3.8 27B

- Source: SpaceXAI/grok-4-1-fast, e.g. OpenCode Zen (`opencode/grok-4.1-fast`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (API variants: `grok-4-1-fast-reasoning`, `grok-4-1-fast-non-reasoning`)
- **Short description:** xAI (SpaceXAI)'s tool-calling-specialized agentic model launched 2025-11-19 alongside the Agent Tools API; 2M context window, positioned for customer support, finance and agentic search. Now superseded by Grok 4.3 and marked deprecated by Artificial Analysis.
- **Provider / access:** xAI API (`grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning`, Chat Completions + Responses; Agent Tools API server-side tools: Web Search, X Search, Code Execution, Files/Collections Search, Remote MCP) and OpenCode Zen `opencode/grok-4.1-fast`.
- **Release / knowledge:** released 2025-11-19 (xAI launch post); knowledge cutoff not stated in launch material.
- **IDs:** xAI `grok-4-1-fast-reasoning` and `grok-4-1-fast-non-reasoning`; Zen `opencode/grok-4.1-fast` (per repo metadata).
- **Context window:** 2M tokens (xAI launch post; confirmed 2.0M by Artificial Analysis).
- **Modalities:** text + image in, text out; reasoning only on the reasoning variant; first-class tool calls (Agent Tools API); JSON mode not verified in launch material.
- **Pricing (as of 2025-11-19 launch; model now retired from the xAI pricing list):** $0.20 in / $0.50 out / $0.05 cached input per 1M; tool calls from $5 / 1000 successful invocations. No free tier.
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Berkeley Function Calling v4: **72%** overall accuracy (xAI launch post, vendor chart; the Gemini 3 Pro comparison value is flagged as an independent-estimate pending official results)
- Tau3-Banking / Tau2-Bench: no verified public score found (vendor chart claims top τ-bench Telecom performance from an independent evaluation verified by Artificial Analysis; exact value not legible in text extraction)
- Agentic search with Agent Tools API (vendor-reported, avg cost per task): Research-Eval **63.9** ($0.046), FRAMES **87.6** ($0.048), X Browse **56.3** ($0.091, internal benchmark) — vs GPT-5 45.5 / 86.0 / 24.2, Claude Sonnet 4.5 41.2 / 85.0 / 14.6, Gemini 3 Pro 55.9 / 90.9 / 26.5
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **11 (estimated, #75/300)** — AA flags "independent evaluation forthcoming"; above the non-reasoning class median (7)
- Omniscience Accuracy / Hallucination Rate: no verified public score found (vendor claims the hallucination rate is halved vs Grok 4 Fast with FActScore on par — no published numbers)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks numbers published; vendor trained with long-horizon RL and claims "consistent performance across its full 2-million-token context window".

### Normalized scores (1–100)

- **Tool use: 80/100.** BFCL v4 72%, AA-verified top τ-bench Telecom result, SOTA-class agentic search (Research-Eval 63.9 vs GPT-5 45.5); capped by the absence of public independent Terminal-Bench/Tau3 numbers and a modest general-intelligence AA Index.
- **Reasoning: 55/100.** AA Intelligence Index 11 (estimated, independent eval pending) is above the non-reasoning class median (7) but far below the frontier reference (Index 60+); no public GPQA/HLE figures.
- **Context window: 95/100.** 2M verified by both vendor and AA (≥1M tier = 95–100); held at 95 rather than 100 because no ≥512K retrieval proof (MRCR/RULER) is published.
- **Multimodal: 65/100.** Text + image in, text out only — mid of the image-in band (60–70); no video/PDF/audio in, no non-text out.
- **Coding: 60/100.** No verified public SWE-bench/LiveCodeBench/SciCode scores found; marketed as a tool-calling/agentic model rather than a coding specialist — mid band, capped by missing data.
- **Cost efficiency: 95/100.** Launch pricing $0.20/$0.50 per 1M (cached $0.05) sits at the cheap end of the methodology scale (~$0.10/$0.20 = 97–99); the model is now retired from xAI's price list and tool calls bill per invocation.
- **Overall Score: 71/100.** Half-up mean of (80, 55, 95, 65, 60) = 71.0 — a cheap, 2M-context, tool-calling workhorse (now retired); escalate to Grok 4.3/4.5-class models for reasoning-heavy or coding-heavy work.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** - 2026-10-04
- Method: public internet research (xAI launch post, Artificial Analysis model page, xAI docs current model list); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
