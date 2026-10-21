# Pixel Canary — findings by MiniMax M3.1 Flash

- Source: Callstack (Apex, revealed from stealth "Pixel Canary"), `callstack/apex`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (stealth alias of **Callstack Apex**)
- **Short description:** Callstack's React/React-Native-specialist coding model — shipped anonymously on the Vercel AI Gateway as **"Pixel Canary"** and revealed as **Apex** on 2026-10-01, with 262K context, image input, a 262,144-token context on a 131,072-token output cap, and a Next.js agent eval of 28/31 baseline, 30/31 with an AGENTS.md.
- **Provider / access:** Vercel AI Gateway (`callstack/apex`; the stealth id was `vercel/stealth/pixel-canary`), Callstack's own OpenAI- and Anthropic-compatible API (`callstack/Apex`, snapshot `apex-20261001` at `https://api.callstack.ai/v1`). **Not on OpenCode Zen and not on OpenRouter**; the OpenCode id in this folder resolves to nothing. EU/EEA processing, zero data retention on by default, business accounts only.
- **Release / knowledge:** private beta **2026-05-27**; stealth release on Vercel **2026-09-25**; GA **2026-10-01/02** (Callstack blog; models.dev release_date 2026-10-08). Knowledge cutoff not published.
- **IDs:** `callstack/apex` (Vercel AI Gateway), `callstack/Apex` / `apex-20261001` (Callstack API), `vercel/stealth/pixel-canary` (retired stealth id).
- **Context window:** **262,144** tokens, **131,072** max output.
- **Modalities:** text and image input, text output; reasoning effort none/low/medium/xhigh; OpenAI- and Anthropic-compatible endpoints.
- **Pricing (as of 2026-10-20):** **$0.50/M in, $0.20/M cached, $3.00/M out** (Callstack pricing page, Vercel AI Gateway). The folder's "free while in stealth" is **unverified** — no provider catalog shows a $0 Pixel Canary.
- **Architecture:** proprietary and closed — a domain post-train of a licensed Qwen-family base (initially Gemma 4), so no weights are published.

### Raw benchmarks found

> Only framework-specific agent evals exist. No standard benchmark (SWE-bench, Terminal-Bench, LiveCodeBench, GPQA, HLE) has ever been published for this model, and no Artificial Analysis or BenchLM page exists.

Agent / tool use:

- Next.js agent eval (31 tasks, pass@4, agent = OpenCode over the Vercel AI Gateway): **28/31 = 90.3%** baseline; **30/31 = 96.8%** with an AGENTS.md — the only failure is `uses-nextjs` (Vercel leaderboard, run 2026-10-13)
- React Native evals (10 runs, built by Callstack): **87.8%** vs Claude Opus 5.5 **88.6%** and GPT-6.1 Sol **86.3%**
- Cost per RN task: **$7.72** vs GPT-6.1 Sol $11.50 and Opus 5.5 $28.75; Next.js task cost **$0.067**, 13× cheaper than GPT-6 Astra; up to 250 tok/s
- Terminal-Bench / τ² / GDPval / OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / MMLU-Pro / AIME / FrontierMath: **no verified public score found** — the model publishes no general-reasoning numbers
- No Artificial Analysis page (`pixel-canary` and `callstack-apex` both 404) and no BenchLM page

Coding:

- The Next.js and React Native evals are the only coding evidence (90.3–96.8% and 87.8% on those frameworks)
- SWE-bench / SWE-bench Pro / LiveCodeBench / Terminal-Bench / DeepSWE: no verified public score found

Long context:

- No MRCR / RULER measurement published; the 262K window is a metadata figure.

### Normalized scores (1–100)

- **Tool use: 62/100.** 90.3–96.8% on a 31-task Next.js agent loop and 87.8% on React Native are respectable agentic results, but they are framework-specific: no Terminal-Bench, τ², GDPval or OSWorld figure exists to confirm general agentic ability.
- **Reasoning: 45/100.** No GPQA, HLE, MMLU-Pro or AIME number was ever published for this model, so the dimension is scored as unmeasured with a penalty.
- **Context window: 68/100.** 262,144 tokens with 131,072 max output is the 200K–500K tier, with no retrieval measurement.
- **Multimodal: 65/100.** Text and image input with text output — the "+image in" band, which is the point of a screenshot-driven React agent.
- **Coding: 62/100.** Two framework evals at 87.8–96.8% are strong, but with no SWE-bench, LiveCodeBench or Terminal-Bench figure the general coding picture is unproven.
- **Cost efficiency: 88/100.** $0.50/M in and $3.00/M out with a $0.20/M cache read is a mid price for a closed specialist model; the folder's "free while stealth" is unverified.
- **Overall Score: 60/100.** Mean of the five quality dims = (62 + 45 + 68 + 65 + 62) / 5 = 60.4 → **60**. Best fit: React and React Native app building inside an agent loop — a narrow specialist, not a general-purpose model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Callstack launch blog and pricing page, Vercel AI Gateway model list and nextjs.org evals leaderboard, models.dev, OpenRouter API, Artificial Analysis and BenchLM 404 checks, OpenCode Zen live model endpoint); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Callstack_Apex.md`, using the same headings.
