# Pixel Canary — findings by Mimo 2.6 Flash

- Source: undisclosed publisher (stealth listing `stealth/pixel-canary`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (stealth model; no vendor name published — **not** a "Free"-tier product name, but it is currently distributed free while in stealth)
- **Short description:** An anonymous, coding-focused model that appeared on Vercel's AI Gateway as `stealth/pixel-canary` on 2026-09-25 and was added free to Cline the same day. Vercel positions it for programming, front-end and mobile app development (greenfield builds and refactoring); no publisher has been disclosed and speculation about the owner (e.g. "Gemini 4 Pro") is unverified. Not a known variant or alias of any other entry in this dataset.
- **Provider / access:** Vercel AI Gateway — model id `stealth/pixel-canary`, OpenAI-compatible **Chat Completions** endpoint; also integrated into the Cline coding agent (free during stealth); indexed on OpenCode Zen as `opencode/pixel_canary`.
- **Release / knowledge:** gateway listing 2026-09-25; first press/coverage 2026-09-26. Knowledge cutoff **not disclosed**.
- **IDs:** `stealth/pixel-canary` (Vercel AI Gateway), `opencode/pixel_canary` (OpenCode Zen). No paid list price published yet, so **no conventional Free/paid ID pair exists**.
- **Context window:** **128K total** (project metadata for this entry); no vendor spec card or independent measurement of the window was found — treat as unverified-by-publisher.
- **Modalities:** text in / text out. Tool calls: yes in practice (it is driven by agent harnesses in Cline and Vercel's evals) but **not documented**. Reasoning mode, JSON mode, image/audio input: **no verified public statement found**.
- **Pricing (as of 2026-09-27):** **$0.00 per 1M tokens — 100% free preview** while the model is in stealth (Vercel AI Gateway model spec card); a "standard" paid rate has not been published. **Caveat:** Vercel states the provider may retain prompts and outputs for training, and stealth free access is explicitly time-limited.
- **Architecture:** undisclosed — no parameter count, MoE/dense structure, or license published.

### Raw benchmarks found

> One public benchmark exists for this model so far. Every other row reads
> "no verified public score found"; nothing is estimated or proxied into a number.

Agent / tool use:

- Vercel Next.js Agent Evals: **28/31 = 90.3%** baseline <(Vercel's own benchmark, reported by Cline/X and Lookonchain 2026-09-25/26 — pass@4, up to four attempts per task)>
- Vercel Next.js Agent Evals with `AGENTS.md` docs: **30/31 = 96.8%** <(same source; ties GPT-6 Astra (high) at 90.3%, beats Kimi K3 at 84%)>
- Terminal-Bench 2.1 / 3.0 / 4.0: **no verified public score found**
- Tau3-Banking / Tau2-bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld / AutomationBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (model absent from AA, BenchLM, llm-stats, Vals and TensorFeed leaderboards as of 2026-09-27)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-bench Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found**
- Positioning evidence (claim, not a score): Vercel describes it as targeting programming, front-end and mobile development, supporting both new builds and refactoring <(via Express/Lookonchain, 2026-09-26)>

Long context:

- No long-context retrieval reported (MRCR / RULER / GraphWalks): **no verified public score found**

Independent but non-benchmark observations:

- Eyestech (2026-09-26) ran 2 end-to-end Cline tasks and got **0/2 completions** (long thinking phases, transport errors, no delivered code). Sample size of two, different harness from Vercel's evals — recorded as an anecdote, not scored as a benchmark.

### Normalized scores (1–100)

- **Tool use: 62/100.** The only public signal is Vercel's Next.js Agent Evals at 90.3% (96.8% with `AGENTS.md`), a genuine agentic result — but it is vendor-run, narrow (Next.js only), pass@4, and all three of the methodology's frontier anchors (Terminal-Bench 2.1, GDPval-AA, Tau3) plus Claw-Eval are **no verified public score found**, which caps the score in the mid band.
- **Reasoning: 40/100.** Every reasoning anchor — GPQA Diamond, HLE, LCR, CritPt and the composite indexes — is **no verified public score found**; the only positive evidence is indirect (it completes multi-step agentic coding tasks at a 90% pass@4 rate). Scoring that proxy honestly and penalizing the complete absence of direct measurements gives 40.
- **Context window: 54/100.** 128K falls in the 100K–200K tier (50–64 → ~54 by interpolation); additionally neither the publisher nor any third party has published the window or any retrieval measurement, so there is no basis to score higher.
- **Multimodal: 15/100.** Text in / text out only — the methodology's text-only band (10–20); no image, audio or video input and no non-text output is documented anywhere.
- **Coding: 64/100.** The single verified number is a strong one (90.3%/96.8% on Next.js Agent Evals, tying GPT-6 Astra) and the model is explicitly built for coding — but SWE-bench Verified, LiveCodeBench, SciCode, Vibe Code Bench and DeepSWE are all **no verified public score found**, and the one independent anecdote (0/2 in Cline) points the other way, so the score cannot exceed the mid band.
- **Cost efficiency: 100/100.** $0.00/1M during the stealth free preview is the "$0 = 100" rule; caveats that keep it from being a comfortable 100 in practice: the rate is a time-limited promo with no published standard price, and Vercel warns prompts/outputs may be retained for training.
- **Overall Score: 47/100.** (62 + 40 + 54 + 15 + 64) / 5 = 47.0 → 47 (half-up, Cost excluded). Best fit: a free, coding-specialized experiment worth trying in agent harnesses on front-end work — with one narrow vendor benchmark behind it, no independent scores anywhere, and unknown provenance, so it should not be a default production model yet.

---

## Signature

- Provided by: **Mimo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-09-27
- Method: public internet research (Cline announcement, Vercel AI Gateway listings, X/Hacker News coverage, Lookonchain, Startup Fortune, Margrop, Eyestech, AICrier); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Pixel_Canary.md`, using the same headings.
