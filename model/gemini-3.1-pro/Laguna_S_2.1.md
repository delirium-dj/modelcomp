# Gemini 3.1 Pro — findings by Laguna S 2.1

> Source: google/gemini-3.1-pro (Google DeepMind), e.g. Google
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Google DeepMind; GA release of the Gemini 3.1 Pro Preview announced February 2026)
- **Short description:** Google DeepMind's flagship multimodal reasoning model, succeeding Gemini 3 Pro Preview with gains in reasoning, knowledge, coding and agentic reliability; high token efficiency and an optional Deep Think (extended-thinking) mode. Suitable for long-horizon agentic coding and research.
- **Provider / access:** Google DeepMind / Google AI. API via Google AI Studio (Generative Language API, `google/gemini-3.1-pro`) and OpenRouter; OpenCode Zen free tier also available. Function-calling + JSON/structured-output mode.
- **Release / knowledge:** Released February 2026 (Artificial Analysis, 2026-02-19); GA model `google/gemini-3.1-pro`. Knowledge cutoff not officially disclosed.
- **IDs:** `google/gemini-3.1-pro`. A free tier is available on Google AI Studio + OpenCode Zen (meta.json, 2026-09-23; not a paid-only/no-Free-ID model).
- **Context window:** 2,000,000 input tokens / 64,000 output tokens (GA spec per `model/gemini-3.1-pro/meta.json` and the Google DeepMind Gemini 3.1 Pro model card; the February Preview was documented at 1M — the GA release advertises 2M).
- **Modalities:** Text, image, audio, video and PDF input; text output. Tool calling, structured outputs, JSON mode supported; reasoning/thinking yes (Deep Think).
- **Pricing (as of 2026-09-23):** Google AI Studio / OpenCode Zen free tier ($0 in/out, usage-limited; content may be used to improve Google products). Paid API at $2.00 per 1M input / $12.00 per 1M output tokens (≤200K-context Preview API pricing; 90% cache discount).
- **Architecture:** Proprietary (closed weights). Google has not publicly disclosed parameter count or mixture-of-experts config for Gemini 3.1 Pro.

### Raw benchmarks found

> Verified public numbers, sourced per metric. Benchmarks not located are marked "no verified public score found" and are NOT invented.

Agent / tool use:

- Terminal-Bench Hard (agentic terminal coding): **54%** — leads, ahead of Claude Sonnet 4.6 (Artificial Analysis, 2026-02-19)
- GDPval-AA (real-world agentic tasks): **Elo 1316** — up 100 p.p. over Gemini 3 Pro Preview; still behind Claude Sonnet 4.6, Opus 4.6, GPT-5.2 (xhigh) and GLM-5 (Artificial Analysis, 2026-02-19)
- Intelligence Index (AA v4.3.2, 10 evals): **30 / #81 of 212** — above-average among comparable price-tier models (median 25); was #1 at Feb-2026 launch leading 6 of 10 evaluations, overtaken by Sep-2026 releases (Artificial Analysis model page, 2026-09)
- Leads 6 of the 10 Intelligence Index evaluations, including the agentic ones (Terminal-Bench Hard, SciCode, CritPt) — Artificial Analysis, 2026-02-19
- Terminal-Bench 2.1: no verified public score found (distinct harness; only "Terminal-Bench Hard" 54% was found)
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- CritPt (research-level physics reasoning): **18%** — leads the next-best model by 5 p.p. (Artificial Analysis, 2026-02-19)
- GDPval-AA: **Elo 1316**
- AA-Omniscience: **53% accuracy / 50% hallucination rate** — down from 88% on Gemini 3 Pro Preview (Artificial Analysis, 2026-02-19)
- Artificial Analysis Intelligence Index: **30 / #81 of 212** (model page, 2026-09)
- GPQA Diamond: no verified public score found (OpenRouter listed 90.8% but attributed to "Gemini 3 Pro Preview (high)" — not verified for Gemini 3.1 Pro)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- Terminal-Bench Hard: **54%** — leads agentic coding (Artificial Analysis, 2026-02-19)
- SciCode: **59%** — leads the Artificial Analysis Coding Index (Artificial Analysis, 2026-02-19)
- Leads the Artificial Analysis Coding Index overall
- SWE-bench Verified / DeepSWE / LiveCodeBench / SWE-Atlas: no verified public score found

Long context:

- MRCR / RULER / GraphWalks at window length: no verified public score found (no public MRCR/RULER retrieval-at-length figure located for 3.1 Pro; context window verified at 2M via Google/DeepMind model card + meta.json)

- Speed (output): ~114–118 tokens/sec; cost per Intelligence Index task: $0.67 (Artificial Analysis, 2026-02-19)

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench Hard 54% leads its harness and GDPval-AA 1316 is a solid mid-tier agent signal; capped by zero Terminal-Bench 2.1, Tau3, Claw-Eval or Toolathon rows.
- **Reasoning: 70/100.** CritPt 18% leads the field and the AA Intelligence Index 30 sits above the price-tier median; capped by zero verified GPQA/HLE/LCR rows and a 50% AA-Omniscience hallucination rate.
- **Context window: 95/100.** GA-spec 2M-token input window (up from 1M Preview) is top-tier; no MRCR/RULER retrieval-at-length figure keeps it off a perfect score.
- **Multimodal: 85/100.** Text, image, audio, video and PDF input with Deep Think reasoning; capped by text-only output.
- **Coding: 75/100.** Terminal-Bench Hard 54% and SciCode 59% both lead their AA indexes; capped by zero SWE-bench Verified/DeepSWE/LiveCodeBench rows for this ID.
- **Cost efficiency: 90/100.** $0 free tier on AI Studio/Zen plus moderate $2/$12 paid pricing with 90% cache discount; usage limits on free keep it below a flat maximum.
- **Overall Score: 79.4/100.** Mean of the five quality dims (72+70+95+85+75)/5 = 79.4. Best fit: low-cost long-context multimodal agent work where verified 2M serving matters more than GPQA/HLE-certified reasoning.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public internet research (Google DeepMind model card, Artificial Analysis launch/model pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
