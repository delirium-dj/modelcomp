# Gemini 3.8 Flash — findings by Claude Sonnet 4.5

- Source: Google DeepMind (`gemini-3.8-flash`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (paid; no Free-tier Zen ID verified in this session — see IDs)
- **Short description:** Google DeepMind's "most intelligent workhorse" Flash model, built directly on Gemini 3.7 Flash and released alongside a restricted-access sibling, Gemini 3.8 Flash Cyber (Fairwind Program only). Top use case: long-horizon agentic software engineering and multi-step enterprise agent workflows at Flash-tier price. Variant flag: three reasoning effort levels (`thinking_level` low/medium/high) are benchmarked separately by Artificial Analysis; the Cyber variant is a separate model and is NOT covered here.
- **Provider / access:** Google Gemini API / Google AI Studio `gemini-3.8-flash` (stable GA); Google Cloud Gemini Enterprise Agent Platform (Vertex) `gemini-3.8-flash`. Native Gemini `generateContent` API (google-genai SDK); Google also exposes an OpenAI-compatible Chat Completions endpoint for Gemini models. Migration note from Google Cloud docs: integer `thinking_budget` replaced by string enum `thinking_level`. OpenCode Zen / models.dev listing could not be verified in this session (search budget exhausted before that check).
- **Release / knowledge:** 2026-09-02 release (Artificial Analysis model page; Wikipedia; Google blog). Knowledge cutoff: no verified public statement found in this session.
- **IDs:** `google/gemini-3.8-flash` (Gemini API / Vertex). No Free ID on OpenCode Zen was verified — state explicitly: unverified, not assumed to exist.
- **Context window:** 1M tokens input, 64K tokens output — verified via DeepMind official model card ("token context window of up to 1M … Text, with a 64K token output"); Artificial Analysis and BenchLM independently list 1M. Vals AI runs it with max output 65,536.
- **Modalities:** Text, image, audio, video in (DeepMind model card; Artificial Analysis lists text/image/speech/video input); PDF/document input per Google docs ("document(s) to be summarized"); text out only. Reasoning: yes (configurable `thinking_level`). Tool calls: yes (agentic/tool benchmarks run natively). JSON mode: standard Gemini API structured output (not separately re-verified this session).
- **Pricing (as of 2026-09-23):** Paid — $0.75 / 1M input, $3.75 / 1M output, $0.075 / 1M cached input (Google blog; Artificial Analysis; BenchLM). Google labels this an "introductory" price matching 3.7 Flash through 2026-12-31; Vellum reports list price rises to $1.50 / $7.50 on 2027-01-01. Artificial Analysis measured $0.58 per Intelligence Index task (high effort, v4.1.1) — ~40% higher real cost than 3.7 Flash due to ~30% more output tokens (avg 48K/task). No free tier verified; AI Studio free-quota use is subject to Gemini API Additional Terms (data may be used for improvement — standard Google free-tier privacy caveat).
- **Architecture:** Proprietary, closed weights. Param count / MoE not disclosed; model card states it "is based on Gemini 3.7 Flash" and defers architecture, training data, and hardware details to the 3.7 Flash model card.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google launch evaluation table, self-computed, as reported by Vellum / emergent.sh / MindStudio; leads Claude Opus 5 89.1% and GPT-5.6 Sol 88.8% in that table). A second figure of **90.8%** (vs 81.6% for 3.7 Flash) is reported by DataCamp and local-ai-zone citing Google's developer docs — harness discrepancy between the two Google sources noted; Vals AI independently ranks it #5/62 on Terminal-Bench 2.1 (value not retrievable). Terminal-Bench 4.0: **19.1%** (Google table via MindStudio — well behind Opus 5).
- Tau3-Banking / Tau2-Bench: **45%** τ³-Banking (Artificial Analysis, Intelligence Index v4.1.1 harness, high effort; +12 pts over 3.7 Flash — AA's largest single gain)
- GDPval-AA: **1545** Elo (GDPval-AA v2, Google launch table sourced from Artificial Analysis leaderboard; vs 3.7 Flash 1482, Opus 5 1824, GPT-5.6 Sol 1710)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (SWE-Atlas main task reported under Coding below). OSWorld-2.0: Google table shows 3.8 Flash trailing Opus 5 (emergent.sh) but no numeric value was retrieved — no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (Vals AI ranks it #4/138 on GPQA Diamond but the numeric value was not retrievable; a third-party aggregator figure of 59% is inconsistent with other results and is NOT accepted)
- HLE: **54.9%** HLE-Verified (Google official blog / DeepMind Flash page, self-computed). Standard HLE: **45.4%** (Google developer docs via DataCamp; vs 45.7% for 3.7 Flash — essentially flat)
- LCR / MLCR: no verified public score found (AA-LCR is a component of the AA Index but the per-eval value was not retrieved)
- CritPt: no verified public score found (component of AA Index; per-eval value not retrieved)
- Artificial Analysis Intelligence Index / BenchLM overall: **59** (AA Index v4.1.1, high effort, at launch — on par with GPT-5.6 Sol xhigh and Grok 4.6 medium; low effort 52); **41** on current AA Index v4.3.2 (high; medium 40, low 34 — index re-versioned with Terminal-Bench 4.0, AutomationBench-AA, AA-Briefcase, GDP.pdf) / BenchLM **75.77/100, #6 of 231** public (#5 of 129 source-verified; Knowledge category #6, Agentic category #10)
- Omniscience Accuracy / Hallucination Rate: no verified public score found / no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for SWE-bench Verified (Vals AI ranks it #24/88 on SWE-bench, value not retrievable) / **61.6%** SWE-Bench Pro (Google developer docs via DataCamp; vs 60.4% for 3.7 Flash)
- LiveCodeBench: no verified public score found (Vals AI ranks it #3/143, value not retrievable)
- SciCode / AA-SciCode: no verified public score found (component of AA Index; per-eval value not retrieved)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **73.7%** DeepSWE v1.1 (Google launch table; ties Claude Opus 5, ahead of GPT-5.6 Sol 72.7%); **51.9%** SWE-Atlas (Google developer docs via DataCamp; vs 48.0% for 3.7 Flash); Vals Finance Agent V2 and Harvey Legal Agent Benchmark — Google states 3.8 Flash outperforms 3.7 Flash and "other frontier models" (Harvey reported at 61.4% by MindStudio; Vals ranks it #10/58 on Harvey)

Long context:

- no long-context retrieval reported (1M window verified by model card; no MRCR v2 / RULER / GraphWalks value for 3.8 Flash was retrieved in this session — Google's eval-methodology page for the 3.x family references MRCR v2 but the 3.8 Flash figure was not obtained)

### Normalized scores (1-100)

- **Tool use: 86/100.** Terminal-Bench 2.1 at 89.4–90.8% clears the frontier bar (~88%+), and τ³-Banking 45% sits just under the ~50% frontier line. Capped by GDPval-AA 1545 (well short of ~1750 frontier; 279 Elo behind Opus 5) and a weak 19.1% on Terminal-Bench 4.0, which AA's re-versioned index (41 on v4.3.2) also reflects.
- **Reasoning: 85/100.** HLE-Verified 54.9% / HLE 45.4% clears the 40%+ frontier threshold and AA Index 59 (v4.1.1) sits at the 60 frontier line. Capped by missing verified GPQA Diamond, LCR, and CritPt values, flat HLE vs 3.7 Flash, and a mid-pack 41 on the current AA Index v4.3.2.
- **Context window: 95/100.** ≥1M tier (1M in / 64K out per DeepMind model card, corroborated by AA and BenchLM) → 95–100 band; held at 95 because no ≥98% retrieval at 512K+ (MRCR/RULER) was verified for this model.
- **Multimodal: 92/100.** Text, image, audio, video, and document input verified by the official model card and Artificial Analysis; text-only output. Audio-in qualifies for the 90–100 band; held at 92 because there is no non-text output and no verified MMMU-Pro / Video-MMMU numeric score for this ID.
- **Coding: 89/100.** DeepSWE v1.1 73.7% (0.3 pt under the 74% frontier bar, tying Opus 5), Terminal-Bench 2.1 89.4% (above 85% frontier bar), SWE-Bench Pro 61.6%, SWE-Atlas 51.9%. Capped just under 90 by the missing SciCode / SWE-bench Verified / LiveCodeBench values and only +1.2 pt SWE-Bench Pro gain over 3.7 Flash.
- **Cost efficiency: 90/100.** Paid at $0.75 / $3.75 (cached $0.075) — between the ~$0.60/$2.20 (~92) and ~$1.25/$4.25 (~88) reference points. Note effective per-task cost is ~40% higher than 3.7 Flash due to verbosity, and list price doubles to $1.50/$7.50 on 2027-01-01 (would re-score to ~85). Not counted in Overall.
- **Overall Score: 89.4/100.** (86 + 85 + 95 + 92 + 89) / 5 = 447 / 5 = 89.4. Best fit: budget-tier default for long-horizon agentic coding and terminal work with large multimodal context, where you accept higher token verbosity in exchange for near-Opus DeepSWE/Terminal-Bench 2.1 results at ~1/7 the price; not the pick for GDPval-style general knowledge work or hardest-tier agent tasks (TB 4.0, OSWorld-2.0).

---

## Signature

- Provided by: **Claude Sonnet 4.5 (anthropic/claude-sonnet-4-5)** — 2026-09-23
- Method: Fresh public internet research in this session only (Google/DeepMind blog, DeepMind model card and Flash product page, Google Cloud Agent Platform docs, ai.google.dev model page, Artificial Analysis model/release/article pages and X post, BenchLM, Vals AI, Wikipedia, plus secondary write-ups from Vellum, DataCamp, emergent.sh, MindStudio, local-ai-zone that reproduce Google's launch table); search budget was exhausted before OpenCode Zen / models.dev / MRCR / GPQA numeric lookups could be completed, so those are marked as not found rather than inferred. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
