# Pixel Canary — findings by Muse Spark 1.3

- Source: Stealth/Pixel Canary (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** Anonymous stealth coding model served via Vercel AI Gateway, tuned for web and mobile app development with adjustable reasoning effort. Free while in preview.
- **Provider / access:** Vercel AI Gateway `stealth/pixel-canary` (Chat Completions / Responses-compatible gateway API); OpenCode Zen `opencode/pixel_canary`. Also free in Cline while in preview.
- **Release / knowledge:** 2026 preview listing on Vercel AI Gateway; exact release date and knowledge cutoff undisclosed (stealth).
- **IDs:** `stealth/pixel-canary`; `opencode/pixel_canary`
- **Context window:** 128K total — per repo `meta.json`; no independent upstream context spec found (stealth, unverified).
- **Modalities:** Text in/out per repo `meta.json`; vendor describes strong coding with adjustable reasoning effort. Tool calling and image input unverified — scored as text-only.
- **Pricing (as of 2026-09-27):** Free preview (Vercel AI Gateway lists Free/Free/Free; free in Cline while in preview). Repo `meta.json` notes "Standard pricing" for post-preview; long-term paid rates undisclosed.
- **Architecture:** Proprietary/stealth — params, MoE status, and license undisclosed.

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
- DeepSWE / Coding Index / other: **no verified public score found**
- Vercel Next.js evals (next-evals-oss harness, 31 Next.js tasks up to 15.5.6): **28/31 passing (90.3%)**, matching GPT-6 Astra on that test (techandbusiness newswire on Vercel AI Gateway listing). Narrow web-framework scope — treated as provisional coding proxy, not a general SWE benchmark.

Long context:

- No MRCR / RULER / GraphWalks retrieval score reported; no verified long-context retrieval at the stated 128K.

### Normalized scores (1–100)

- **Tool use: 55/100.** No verified TB2.1/Tau3/GDPval/MCP-Atlas numbers; capped hard despite the Next.js agentic-coding proxy.
- **Reasoning: 60/100.** Adjustable reasoning effort claimed by vendor with zero verified GPQA/HLE/LCR/CritPt numbers; capped as provisional.
- **Context window: 58/100.** 128K total sits in the 100K–200K tier (50–64); capped mid-tier with no verified retrieval at length.
- **Multimodal: 15/100.** Text in/out only per repo meta; no verified image/audio/video input or non-text output.
- **Coding: 72/100.** Vercel Next.js evals 28/31 is strong but narrow web-framework evidence; capped by zero verified SWE-bench/LiveCodeBench/SciCode/DeepSWE scores.
- **Cost efficiency: 100/100.** $0 input/output during the free preview on AI Gateway and Cline; flag as time-limited with undisclosed post-preview pricing.
- **Overall Score: 52/100.** Mean of the five quality dims (55 + 60 + 58 + 15 + 72) / 5 = 52.0 → 52; best fit as a free narrow web-app coding trial, not a general frontier pick until broader benchmarks land.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-27
- Method: public internet research (Vercel AI Gateway model page and changelog, vercel/next-evals-oss repo, newswire coverage, AI SDK playground listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
