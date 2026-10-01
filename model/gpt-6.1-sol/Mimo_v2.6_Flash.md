# GPT-6.1 Sol — findings by Mimo v2.6 Flash

- Source: OpenAI / GPT-6.1 Sol (`gpt-6.1-sol`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier refresh of GPT-6 Sol, launched at DevDay 2026 — near-GPT-6-Astra agentic coding, computer-use and professional-work performance at one-fifth of Astra's token price. Direct upgrade of the GPT-6 Sol entry, positioned between GPT-6 Luna (below) and GPT-6 Astra (flagship).
- **Provider / access:** OpenAI API (`gpt-6.1-sol`, Chat Completions), ChatGPT Work + Codex for Plus/Pro/Business/Enterprise/Edu (not yet in ChatGPT Chat). A "GPT-6.1 Sol Ultrafast" variant (up to 8x token generation) was announced for Codex.
- **Release / knowledge:** 2026-09-29 (DevDay 2026 announcement + system card addendum). Knowledge cutoff not published.
- **IDs:** `openai/gpt-6.1-sol`; no verified OpenCode Zen Free ID found (paid only as of 2026-10-01).
- **Context window:** 1,050,000 tokens total (1.05M), per OpenAI's announcement table via Vellum and BenchLM model details; max output not stated for this ID.
- **Modalities:** file, image, text in → text out; reasoning model (low/medium/high/xhigh/max effort tiers inherited from GPT-6 Sol); tool calls; JSON mode. No audio/video path claimed.
- **Pricing (as of 2026-10-01):** $2.00 input / $10.00 output per 1M, cached input $0.10 per 1M (50% cut vs GPT-6 Sol's $0.20, 95% off standard input). Paid; no free tier found.
- **Architecture:** proprietary (no parameter/weights disclosure).

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 (offline set, partial reward): **71.4%** at max effort (OpenAI announcement) — vs GPT-6 Sol 64.4%, GPT-6 Astra 73.5%
- AutomationBench 1.0.6: **36.1%** (BenchLM); **35.4%** medium / ~36.0% higher effort (OpenAI/Vellum) — 2.2 pts above Claude Opus 5.5 at medium, +4.8 over GPT-6 Sol
- Terminal-Bench Science 0.1: **57.0%** (BenchLM) at max effort — more than 2x GPT-6 Sol; GPT-6 Astra ceiling 68.1%
- AA Terminal-Bench 4.0: **56.1%** (BenchLM)
- GDPval-AA: **Elo 1575** / index 53.8 (BenchLM)
- AA Briefcase: **Elo 1564** (BenchLM)
- ExploitGym: **35.1%** (BenchLM)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.8%** (SayGM third-party run, n=96, seed 42, 2026-09-30)
- Humanity's Last Exam (AA-HLE): **52.9%** (BenchLM)
- AA-LCR: **83.0%**; MLCR-AA: **33.9%** (BenchLM)
- CritPt: **31.7%** (BenchLM)
- Artificial Analysis Intelligence Index: **51.8** (BenchLM); LLM Stats Score 52.0, rank #11 overall (llm-stats)
- AA-Omniscience Accuracy / Hallucination Rate: **62.1% / 54.3%** (BenchLM)
- Factuality (OpenAI internal, flagged-error conversations): factual-error rate **7.7%** at low effort (down from 11.4% on GPT-6 Sol, −32%), within 1.9 pts of Astra across efforts
- HealthBench Consensus: **96.0%**; HealthBench Hard **36.2%** (llm-stats / BenchLM)
- MMLU-Pro / AIME: no verified public score found for this ID

Coding:

- DeepSWE v1.1: **75.2%** at higher reasoning effort (OpenAI) — matches GPT-6 Astra's 74.8% at ~$1.50/task vs ~$7.70; BenchLM logs **71.9%**
- AA-SciCode: **54.2%** (BenchLM)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Terminal-Bench 2.1 / Vibe Code Bench: no verified public score found for this exact ID (BenchLM marks these "coming soon")
- GDP.pdf (professional document extraction): **32.0%** (OpenAI) / 31.0% (BenchLM) — beats Claude Opus 5.5 with fallbacks (28.8%), 0.2 pts behind Astra

Long context:

- 1.05M-token window claimed; no MRCR / RULER / GraphWalks retrieval measurement published for this ID — no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld 2.0 71.4% (within 2.1 pts of Astra), AutomationBench 36.1%, Terminal-Bench Science 57.0% and GDPval-AA Elo 1575 all sit at/near the frontier band (methodology: GDPval ~1750+ = 90–100); capped below 90 by GDPval-AA still under the 1750 anchor, AA Terminal-Bench 4.0 only 56.1%, and no τ-bench/Claw-Eval/MCP-Atlas row for this ID.
- **Reasoning: 88/100.** GPQA Diamond 93.8% (independent run), AA-HLE 52.9%, AA-LCR 83% and a 32% hallucination cut over GPT-6 Sol mark a clear frontier-tier reasoner; capped by CritPt 31.7% / MLCR 33.9% still well behind flagship science models and by AA Intelligence Index 51.8 trailing the 61-class leaders.
- **Context window: 95/100.** 1.05M tokens maps to the ≥1M tier (95–100); held out of 100 because no ≥98% retrieval-at-512K+ measurement (MRCR/RULER) exists for this ID.
- **Multimodal: 65/100.** File and image input with text output sits in the "+image in = 60–70" band; no video/PDF-in claim verified, no audio path, and no vision benchmark score (AA-MMMU-Pro 86.0% is a text-formatted reasoning eval) caps it below 70.
- **Coding: 89/100.** DeepSWE v1.1 75.2% matching the flagship Astra at a fifth of the cost, plus AA-SciCode 54.2%, is near-top agentic coding; capped below 90 by the total absence of SWE-bench Verified / LiveCodeBench / Terminal-Bench 2.1 numbers for this exact ID.
- **Cost efficiency: 74/100.** $2/$10 per 1M lands between the ~$1.25/$4.25 (~88) and $3/$15 (~60) anchors, helped by the $0.10 cached input (95% off standard) and per-task costs 5–7x below Astra; no free tier to push it higher.
- **Overall Score: 84.6/100.** (86+88+95+65+89)/5 = 84.6 — best-fit recommendation: the default workhorse for agentic coding, computer use and document/workflow automation where Astra-class output is needed at mid-tier spend; keep GPT-6 Astra for the hardest science, cyber and proof work.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-01
- Method: Public internet research (OpenAI announcement + system card addendum, Vellum benchmark explainer, BenchLM model page, llm-stats, SayGM independent GPQA run, The New Stack, Model Beat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
