# GPT-6 Astra — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (paid flagship; no Free-tier wording)
- **Short description:** OpenAI's flagship above GPT-5.6 Sol, built for frontier reasoning, long-horizon agents, computer use and end-to-end coding. Ties Claude Fable 5.1 on both Artificial Analysis flagship indices at markedly lower per-task cost; first OpenAI model to cross the "Critical" cybersecurity threshold under its Preparedness Framework (offensive capabilities gated to the Daybreak program).
- **Provider / access:** OpenAI API — Responses `v1/responses`, Chat Completions `v1/chat/completions`, Realtime `v1/realtime`, Batch; also served through Codex. Not offered on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Limited preview 2026-09-03, full paid rollout 2026-09-04 (OpenAI launch post, updated 2026-09-22/29; AA FAQ); knowledge cutoff April 30, 2026. Lineup note (2026-10-10): GPT-6 Sol/Luna (Sep 22), GPT-6.1 Sol (Sep 29) and GPT-6 Instant (Oct 7 paid / Oct 8 free) now sit alongside — Astra remains the max-effort reasoning flagship.
- **IDs:** `gpt-6-astra` (OpenAI API model ID; snapshots/aliases published under the same name). No Free ID on Zen.
- **Context window:** 1,050,000 tokens total / 128,000 max output — verified on the OpenAI API model page. Requests with >272K input tokens bill at 2x input and 1.5x output for the full request.
- **Modalities:** Text + image in; text out. Audio/video not supported. Reasoning: yes (`reasoning.effort` low/medium/high/xhigh/max). Tools: function calling, structured outputs, web search, file search, code interpreter, hosted shell, computer use, MCP, tool search.
- **Pricing (as of 2026-09-19):** $10.00 in / $50.00 out per 1M; cached input $1.00 (90% discount); cache writes $12.50 (1.25x input rate). Batch/Flex 50% of standard; Fast mode 2x. Artificial Analysis measured $3.26 per task (Intelligence Index, max effort) and $7.09 per task (Coding Agent Index, max).
- **Architecture:** Proprietary, closed weights; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v4.0: **59%** (Artificial Analysis — leads field; OpenAI's own table reads 57.9%; Claude Fable 5.1 52%/55.8%, GPT-5.6 Sol 40%)
- AutomationBench-AA: **69%** (Artificial Analysis — leads; Grok 4.6 67%, GLM-5.3 62%, GPT-5.6 Sol 60%)
- OSWorld 2.0: **72.6%** (OpenAI table; GPT-5.6 Sol 65.7%, Claude Opus 5 70.2%)
- ScreenSpot-Pro (no external tools): **92.7%** (OpenAI table; GPT-5.6 Sol 76.9%)
- Agents' Last Exam: **59.3%** (OpenAI table; Sol 53.6%, Opus 5 55.5%, Fable 5.1 48.7%)
- GDP.pdf: **31%** all-criteria pass rate (Artificial Analysis; Sol 27%)
- GDPval-AA v2: **~45 Elo below GPT-5.6 Sol** (Artificial Analysis; 24 turns/task at max vs Sol 45 and Fable/Opus 60 — deliberate turn-thrift trade)
- BrowseComp: **91.5%** (OpenAI table; Opus 5 90.8%, Sol 90.4%)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **53** at max, rank **#7/227** (AA page, 2026-10-10; was #3/199 on 2026-09-16 as Opus 5.5, Sonnet 5.5 and Grok 4.7 landed); OpenAI's launch table cites the older v4.1.1 as **61.2** vs Fable 5.1 65.7 and Sol 60.9 — version mismatch, not comparable
- GPQA Diamond: **~93–96%** (OpenAI table shows the frontier field bunched at 92.6–96.0%)
- HLE (with tools): **57.2%** (OpenAI table; Fable 5.1 65.0%)
- FrontierMath Tier 4 (v2): **97.6%** (OpenAI launch table, post-update read 2026-10-10 — described as saturated; an earlier read of the same table produced 64.6%, treat 97.6 as the current vendor figure; Fable 5.1 52.6%, Opus 5 30.0%)
- ARC-AGI-2: **95.0%**; ARC-AGI-3: **99.9%** — saturated, beats the human action-efficiency baseline on 96% of levels (OpenAI launch table; Kamradt quote)
- AA-Omniscience: accuracy **+4 pts** with hallucination rate down to **51%** at max effort (AA; Sol's rate was 92%); OpenAI internal hallucination rate **4.2%** vs Sol 12.2%
- MRCR v2 8-needle: **100.0%** @256K–512K and **96.3%** @512K–1M (OpenAI table)
- AA-Briefcase (long-horizon knowledge work): **~+90 Elo over GPT-5.6 Sol**; Sol still leads Presentation Quality Elo (AA)

Coding:

- AA Coding Agent Index: **62** at max — tie #1 with Claude Fable 5.1 (Opus 5 60, GPT-5.6 Sol 55, Muse Spark 1.3 54)
- DeepSWE v1.1: **74.1%** (OpenAI harness; AA's coding-index read is 68% vs Sol 72%; Opus 5 73.7%, Gemini 3.8 Flash 73.8%, Fable 5.1 67.4%)
- SWE-Atlas-QnA: **62%** (AA; Sol 54%)
- Terminal-Bench v4.0 (coding-index harness): **56%** vs Sol 37% (AA Coding Agent Index breakdown)
- FrontierCode 1.1: statistically tied with the frontier field on Main and Extended tracks (OpenAI table)
- BenchCAD: **95.9%** (OpenAI table; Sol 83.3%)
- SWE-bench Verified / SWE-Pro: no verified public score found for Astra specifically in the reviewed sources
- Epoch AI Capabilities Index (ECI): **166, ranked #1** overall; software-engineering panel ~164 vs Fable 5.1 ~167 — the independent ordering reverses the vendor's Terminal-Bench lead (Epoch AI, updated 2026-09-16; all top gaps within Epoch's ~10-pt noise threshold)

Long context:

- MRCR v2 8-needle at 512K–1M: **96.3%** (OpenAI table; 100.0% at 256K–512K); no independent long-context retrieval regressions found

### Normalized scores (1–100)

- **Tool use: 90/100.** Leads AA's agentic stack (TB v4.0 59%, AutomationBench-AA 69%, OSWorld 2.0 72.6%, ScreenSpot-Pro 92.7%); the ~45-Elo GDPval-AA v2 regression from turn-thrift caps it below the low-90s tier.
- **Reasoning: 91/100.** AA Index 53 (v4.3.2, #7/227), GPQA 96.0%, FrontierMath T4 97.6% and ARC-AGI-2 95.0% (both saturated per OpenAI), MRCR 96.3% at 512K–1M; HLE 57.2% still trails Fable 5.1's 65.0%, and Epoch's independent panel puts its software-engineering/math panels a hair behind Fable 5.1 — capped at 91.
- **Context window: 96/100.** 1.05M total (95–100 tier) with 96.3% MRCR retrieval in the 512K–1M band — just under the ≥98%-retrieval bar for a 100.
- **Multimodal: 68/100.** Text+image in / text out (60–70 band) with frontier computer-use grounding; no audio/video input and no non-text output keep it out of the 75–90 band.
- **Coding: 91/100.** Coding Agent Index 62 tie-#1, DeepSWE v1.1 74.1% on OpenAI's harness (68% on AA's), SWE-Atlas-QnA 62%; AA-harness DeepSWE 68% and no outright wins over Fable 5.1 cap it short of Muse Spark 1.3-class coding.
- **Cost efficiency: 33/100.** $10/$50 per 1M sits at ~30 on the inverse-pricing rubric, nudged up for AA's per-task Pareto leadership ($3.26/task vs Fable 5.1's $7.63 at equal Index; $7.09/task on coding) driven by 27k-token task budgets. No free tier; >272K inputs double input rates.
- **Overall Score: 87/100.** (90+91+96+68+91)/5 = 436/5 = 87.2 → 87. Best fit: hardest end-to-end agentic, computer-use and long-horizon coding work where per-task cost matters — flagship tie at ~40–60% of Fable 5.1's per-task cost.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-10-10
- Method: public internet research (second pass 2026-10-10: OpenAI model docs + updated launch post, Artificial Analysis, OrcaRouter/Epoch/Datacurve trackers, Wikipedia model history); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


