# Gemini 4 Hydrogen — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`google/gemini-4-hydrogen`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen — Google's high-efficiency workhorse of the Gemini 4 series, built for rapid execution across everyday coding and agentic workflows (its frontier siblings are Gemini 4 Carbon and Gemini 4 Argon). Not an alias: it is a distinct adapted model ("adapted from Gemini 4 Carbon") with its own model card, pricing and evals.
- **Short description:** a fast, mid-frontier agentic/coding model positioned for iterative repository work, sub-agent orchestration alongside frontier models, multimodal knowledge work and web development; the default model in Google's Antigravity agent.
- **Provider / access:** Google first-party — Gemini API (`https://ai.google.dev`), Google AI Studio, Gemini app, Google Antigravity, Vertex AI / Google Cloud, Google Sheets, Gemini for business, Google Search AI Mode (distribution list from the model card). Chat Completions-style Gemini API; reasoning via four thinking levels (low / medium / high / xhigh).
- **Release / knowledge:** model card published **2026-11-12** (Artificial Analysis lists the xhigh variant released 2026-11-12). Knowledge cutoff: **March 2026** (model card).
- **IDs:** `google/gemini-4-hydrogen` — repo `meta.json` marks `noFreeId: true` (no $0 tier found on the catalogued routes as of 2026-11-13).
- **Context window:** **1,048,576 tokens unified** (input + output combined), up to **65,536 default synchronous output**, up to **1M via background long decode** — model card "Inputs/Outputs" and repo `meta.json`; Artificial Analysis independently lists 1M. No long-context retrieval score (no MRCR / RULER row found), so the window is spec-verified but retrieval-unverified.
- **Modalities:** text, image, audio, video **in**; text **out** — model card + Artificial Analysis technical specifications. Reasoning: yes (four thinking levels). Tool calls: yes (agentic benchmarks + Antigravity distribution). JSON mode: not stated in checked docs.
- **Pricing (as of 2026-11-13):** **$1.50 / 1M input, $7.50 / 1M output**, cache hit **$0.075 / 1M** (95% cache discount) — Artificial Analysis model page (Google API) + repo `meta.json` pricing tiers. No free tier found; a free-tier surprise would raise only the Cost line.
- **Architecture:** proprietary; adapted from Gemini 4 Carbon (architecture, training data and hardware deferred to the Carbon model card); parameter count undisclosed; closed weights.

### Raw benchmarks found

> Vendor-run numbers from the DeepMind model card (published 2026-11-12) plus third-party rows carried on BenchLM and Artificial Analysis (pages read 2026-11-13). BenchLM notes its Overall is **conservative at 15/823 benchmarks covered**.

Agent / tool use:

- **Terminal-Bench 4.1: 57.0%** (model card, cheating-adjusted average reward, Google's own mini-swe-agent vision harness, 5 attempts/task, high effort) — vs Claude Sonnet 5.5 **63.9%** (best in that row), GPT-6.1 Terra not reported.
- **AutomationBench-AA: 76.1%** (model card) — beats Claude Sonnet 5.5 71.8% and GPT-6.1 Terra 60.2%.
- **OSWorld-2.1 (offline subset): 77.6%** (model card) — behind Claude Sonnet 5.5 83.9%, ahead of GPT-6.1 Terra 74.2%.
- **Agents' Last Exam v1.1: 71.6%** (model card, averaged rubric score, 122-task release, Antigravity CLI, five-hour window) — beats Sonnet 5.5 60.4% and GPT-6.1 Terra 69.8%.
- **Vending-Bench 2: $14,549 bank balance** (model card) — beats Sonnet 5.5 $11,165 and GPT-6.1 Terra $9,107.
- **AA Briefcase Elo: 1567**; **AA Terminal-Bench 4.0: 53.5%**; **GDP.pdf: 27.6%** (Artificial Analysis, carried on BenchLM).
- **CWE-bench: 68.1%** (Collinear CWE-bench v2 leaderboard).
- **SWE-sweep: 13.5%** (model card — subtask-weighted reward, Google's own run with Antigravity CLI `agy` 1.4.8, *not* the public leaderboard) — vs Claude Sonnet 5.5 3.1% and GPT-6.1 Terra 5.8%; vendor-internal harness, shown for reference only.
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA (official Elo field) / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- **HLE-Diamond: 58.8%** (model card) — beats Claude Sonnet 5.5 53.3% and GPT-6.1 Terra 47.3%.
- **Artificial Analysis Intelligence Index: 54, rank #16/78** (xhigh variant, page updated 2026-11-13); the Index v5.0.1 spans 9 evals incl. AA-Briefcase, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode-AA 2.0, Omniscience, GDP.pdf, HLE-Diamond, CritPt v2, Terminal-Bench-Science 0.1.
- **BenchLM Overall: 79.08/100, rank #11/1031** (15/823 benchmarks covered — conservative).
- **AA-Omniscience Accuracy 50.5% / Hallucination Rate 8.5%** (Net Score index 46.3 on BenchLM's carried row).
- GPQA Diamond / LCR / CritPt standalone: **no verified public score found** (GPQA row absent from both model card and BenchLM page).

Coding:

- **FrontierCode 2.0: 38.2%** (Cognition-run, carried on BenchLM).
- **CursorBench 4.0: 54.3%** (Cursor-run, carried on BenchLM).
- **Terminal-Bench-Science 0.1: 51.4%** (model card) — behind Claude Sonnet 5.5 59.9% and GPT-6.1 Terra 58.3%.
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench / SWE-Pro: **no verified public score found** — no SWE-bench-style row exists on the model card or BenchLM for this model (SWE-sweep above is a different, internal harness).

Multimodal:

- **MKA (Climb WSR accuracy): 53.4%** (model card) — beats Sonnet 5.5 52.0%, GPT-6.1 Terra 43.8%.
- **Chartography: 66.6%** (model card) — beats Sonnet 5.5 61.6%, GPT-6.1 Terra 63.2%.

Long context:

- **No long-context retrieval reported** (no MRCR / RULER / GraphWalks row) — 1M unified window is spec-verified only.

Speed / cost context:

- 188 tok/s output, time-to-first-answer-token 40.55 s, 13.7 min per Intelligence Index task, $3.16 per Index task (Artificial Analysis, Google API) — capable but latency-heavy at xhigh; AA calls it "slower than average per task and very verbose" (304M output tokens on the Index vs 72.8M median).

### Normalized scores (1–100)

- **Tool use: 73/100.** Broad agentic evidence across five harnesses — AutomationBench-AA 76.1% (beats Sonnet 5.5), Agents' Last Exam 71.6%, Vending-Bench $14,549, OSWorld-2.1 77.6%, AA Briefcase 1567 — but Terminal-Bench 4.1 57.0% trails Sonnet 5.5's 63.9% and the official GDPval-AA Elo / Tau / Claw rows are absent, capping it below the frontier band.
- **Reasoning: 78/100.** HLE-Diamond 58.8% and AA Intelligence Index 54 (#16/78) both beat the Claude Sonnet 5.5 reference in-row, and BenchLM ranks it #11/1031 overall — capped by the Index sitting below the 60+ frontier reference and by missing GPQA / LCR / CritPt standalone rows.
- **Context window: 95/100.** 1,048,576 unified tokens lands in the ≥1M tier (95–100); no retrieval benchmark at 512K+ exists, so it cannot earn the 100 point that requires ≥98% measured retrieval.
- **Multimodal: 92/100.** Text, image, audio **and** video input with text output — full input coverage per the model card and AA specs; held just under max because output is text-only and no non-text generation was verified.
- **Coding: 70/100.** Solid agentic-coding evidence (CursorBench 54.3%, CWE-bench 68.1%, Terminal-Bench 4.1 57.0%, internal SWE-sweep 13.5% far ahead of Sonnet 5.5's 3.1%) — but no SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE row exists anywhere, and FrontierCode 2.0 38.2% is mid-pack, so it can't reach the 90+ frontier coding band.
- **Cost efficiency: 85/100.** $1.50/$7.50 with a 95% cache discount ($0.075 cached) sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) reference points; moderately priced for its Index rank (#41/77 on AA cost) but output price is double the mid-tier reference.
- **Overall Score: 82/100.** (73 + 78 + 95 + 92 + 70) / 5 = 81.6 → **82**. Best-fit recommendation: the default fast-execution agentic coder when you don't need Carbon/Argon-class long-horizon reasoning — strong multimodal knowledge work and automation at 1M context, with the caveat that BenchLM coverage is only 15/823 and the headline SWE-sweep number is Google's own harness.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-11-13
- Method: public internet research (DeepMind first-party model card + evals methodology, Artificial Analysis model page, BenchLM canonical page); scores are normalized 1–100 interpretations, not official vendor scores. Model-card numbers are vendor-run and flagged as such (SWE-sweep explicitly not the public leaderboard).
- Reference URLs:
  - [Google DeepMind — Gemini 4 Hydrogen model card (evals table, distribution, cutoff March 2026)](https://deepmind.google/models/model-cards/gemini-4-hydrogen/)
  - [Google DeepMind — Gemini 4 Hydrogen model card PDF](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Hydrogen-Model-Card.pdf)
  - [Google DeepMind — Gemini 4 Hydrogen evals methodology](https://deepmind.google/models/evals-methodology/gemini-4-hydrogen)
  - [BenchLM — Gemini 4 Hydrogen (Overall 79.08/100, #11/1031, 15/823 coverage)](https://benchlm.ai/models/gemini-4-hydrogen)
  - [Artificial Analysis — Gemini 4 Hydrogen (Xhigh) (Intelligence Index 54 #16/78, $1.50/$7.50, 188 tok/s, 1M context)](https://artificialanalysis.ai/models/gemini-4-hydrogen)
  - [Artificial Analysis — AA-Briefcase leaderboard (Elo 1567)](https://artificialanalysis.ai/evaluations/aa-briefcase)
  - [Cognition — FrontierCode 2.0 (38.2%)](https://cognition.com/blog/frontier-code-2.0)
  - [Cursor — CursorBench 4.0 (54.3%)](https://cursor.com/cursorbench)
  - [Collinear — CWE-bench v2 leaderboard (68.1%)](https://cwe-bench.com/)
- Future sources: if a SWE-bench Verified / LiveCodeBench row, GPQA/CritPt standalone scores, a long-context retrieval measurement, or BenchLM coverage beyond 15/823 appears, re-research and update this file using the same headings.
