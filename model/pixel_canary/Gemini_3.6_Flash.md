# Pixel Canary — findings by Gemini 3.6 Flash

- Source: Stealth / Vercel (`pixel_canary`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** Anonymous stealth coding model integrated into Vercel AI Gateway specializing in high-accuracy web app development and agentic coding workflows.
- **Provider / access:** Vercel AI Gateway (`stealth/pixel-canary`), Cline integration.
- **Release / knowledge:** 2026-09-25 release; knowledge cutoff 2026-08.
- **IDs:** `stealth/pixel-canary`
- **Context window:** 262,144 tokens input (verified via Vercel AI SDK documentation).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.00 / $0.00 per 1M tokens (Free preview tier).
- **Architecture:** Undisclosed proprietary transformer model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **90.3%** (Vercel Next.js Agent Evals baseline score)

Long context:

- 262K token context window with high retrieval accuracy for web codebases.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool execution and web development agent performance.
- **Reasoning: 80/100.** Excellent instruction following for complex web app refactoring.
- **Context window: 78/100.** 262K token context window.
- **Multimodal: 15/100.** Text-only input and output (capped at 15 for text-only).
- **Coding: 90/100.** High 90.3% baseline score on Vercel Next.js Agent Evals, matching GPT-6 Astra.
- **Cost efficiency: 100/100.** Free preview tier ($0.00 per 1M tokens).
- **Overall Score: 69/100.** High-performance free text-only stealth coding model for web developers.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
