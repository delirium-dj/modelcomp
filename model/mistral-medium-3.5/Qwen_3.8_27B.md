# Mistral Medium 3.5 — findings by Qwen 3.8 27B

- Source: Mistral AI/Mistral Medium 3.5 (`mistral-medium-3-5-26-04`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's open-weights (Modified MIT) dense 128B "frontier-class multimodal" model optimized for agentic and coding use cases, released April 2026; positioned as an efficient middle tier — faster, more controllable, and cheaper to run than frontier systems, well below them on the hardest long-horizon tasks.
- **Provider / access:** Mistral La Plateforme API (`mistral-medium-3-5` / card id `mistral-medium-3-5-26-04`), open weights on Hugging Face (`mistralai/Mistral-Medium-3.5-128B`) for self-hosting; 2 API providers tracked by Artificial Analysis. No OpenCode Zen Free ID found.
- **Release / knowledge:** released 2026-04-29 (Artificial Analysis; BenchmarkList lists Apr 28, 2026; model-card slug `mistral-medium-3-5-26-04`); knowledge cutoff not disclosed in sources found.
- **IDs:** `mistral-medium-3-5-26-04` (Mistral API model card); `mistralai/Mistral-Medium-3.5-128B` (Hugging Face). No Free ID on OpenCode Zen found.
- **Context window:** 256K tokens (Mistral docs via docs.mistral.ai model card; AA rounds to 256k/260k)
- **Modalities:** Text + image in; text out (AA technical specs + docs). Reasoning: yes, configurable thinking (Vals runs use "thinking mode: high"; a non-reasoning variant also exists per AA). Tool calls: yes (agentic positioning; Tau2/Tau3/Terminal-Bench agentic runs).
- **Pricing (as of 2026-09-30, paid):** $1.50 in / $7.50 out per 1M; cache discount 90% (cache hit ~$0.15/1M) — Mistral API via Artificial Analysis; AA measured $0.50 per Intelligence Index task. Open weights allow $0 self-hosting (compute excluded).
- **Architecture:** Dense 128B total parameters (AA model-size data); open weights under Modified MIT License; not MoE. Output speed 165.9 t/s, TTFT 2.30s on Mistral API (AA).

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom (success rate): **94.2%** (rank 30/332, 91st pct — Artificial Analysis eval, via BenchmarkList 2026-06-10)
- Tau3-Banking (pass@1): **15.1%** (rank 70/174, 60th pct — AA, via BenchmarkList 2026-09-02)
- Terminal-Bench 2.1: **50.6%** (rank 67/182, 64th pct — AA eval, via BenchmarkList 2026-07-21; field leader GLM-5.3 88.3%)
- Terminal-Bench Hard: **33.3%** (rank 59/326, 82nd pct — AA, via BenchmarkList 2026-06-10)
- GDPval-AA: **936** Elo (rank 112/340, 67th pct — AA, verified 2026-09-02)
- AutomationBench-AA (partial score): **13.7%** (rank 11/13 — AA, verified 2026-08-26)
- AA-Briefcase: **517** Elo, rubric pass rate 12.4% (rank 44/56 — AA, verified 2026-08-27)
- Gert Labs Rankings (agentic coding, 26 games): **37.3%** GScore (rank 45/62, 28th pct — gertlabs.com, 2026-05-11)
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **74.8%** (rank 173/464, 63rd pct — AA eval, verified 2026-07-21; conflicting Vals high-thinking run: 34.8%, 2026-07-28 — harness divergence)
- HLE: **13.8%** (rank 139/466, 70th pct — AA data, 2026-09-02)
- LCR: AA-LCR **65.3%** (rank 122/409, 70th pct — AA data); MLCR: no verified public score found
- CritPt: **0.0%** (rank 30/31 — AA, verified 2026-09-02)
- Artificial Analysis Intelligence Index: **14 / #6 of 65** in open-weights size class (AA page; median 8) — cross-class data point: **30.4 / #115 of 418** (73rd pct, AA data via BenchmarkList 2026-09-02)
- MMLU Pro: **75.3%** (Vals, 2026-07-28)
- Omniscience: AA-Omniscience Index **−36.8** (rank 27/28, 4th pct — AA, verified 2026-09-02; heavy hallucination penalty)
- ObviousBench answer pass³: **91.7%** (low effort; 51.4% with no effort reported)

Coding:

- SWE-bench Verified: **66.4%** (Vals, thinking high, 2026-07-28; std. error 2.11) — Mistral launch material cites 77.6% (vendor claim, aimadetools guide); both listed
- Terminal-Bench 2.0: **30.3%** (Vals, thinking high, 2026-07-28)
- SciCode: **39.6%** (rank 129/458, 72nd pct — AA data, 2026-09-02)
- Vibe Code Bench v1.1: **2.9%** (rank 66/71, 7th pct — Vals, 2026-07-28; field leader Fable 5 90.4%)
- LiveCodeBench: no verified public score found
- Arena AI WebDev Arena: **1265.16** Elo (rank 89/105, 15th pct — arena.ai, 2026-09-02)

Long context:

- Context Arena (GDM-MRCRv2, 8-needle): average **17.6%**; AUC 128K **16.1%**, AUC 1M **2.4%** (thinking-off run, 2026-08-28); thinking-high run: average **32.0%**, AUC 128K **22.3%**, AUC 1M **3.5%** — retrieval degrades hard with context length (256K window)
- MRCR / RULER at 256K: no verified public score found beyond Context Arena above

### Normalized scores (1–100)

- **Tool use: 60/100.** TB2.1 50.6%, Tau3-Banking 15.1% and GDPval-AA 936 all sit in the mid band (50–70), and the 94.2% Tau2-Telecom success (91st percentile) shows real conversational-agent strength; capped by the weak 13.7% AutomationBench partial score and 12.4% AA-Briefcase rubric pass rate on long-horizon work.
- **Reasoning: 58/100.** GPQA Diamond 74.8% (AA run) is mid-band (60–80% → 55–65), HLE 13.8% is low, CritPt 0.0%, and the AA-Omniscience index of −36.8 (4th percentile) signals serious hallucination; held to ~58 by the 74.8% GPQA and 65.3% AA-LCR.
- **Context window: 70/100.** 256K window lands at the top of the 200K–500K band (200K = 70); Context Arena AUC of only 16.1% at 128K and 2.4–3.5% at 1M shows no retrieval headroom, so it stays at the band floor.
- **Multimodal: 65/100.** Text + image in, text out (mid of the 60–70 "+image in" band); MMMU-Pro 64.9% is unremarkable and the Vals Multimodal Index (34.8%, last of 29) caps it below the band top.
- **Coding: 65/100.** SWE-bench Verified 66.4% (66.4% Vals; vendor 77.6%) with TB2.1 50.6% is decent, but Vibe Code Bench 2.9% and SciCode 39.6% match the methodology's weak-gen profile (Vibe <10%, SciCode <40% → 65–75 band floor).
- **Cost efficiency: 80/100.** Paid $1.50/$7.50 with 90% cache discount and $0.50/AA-task sits just above the ~88 band of $1.25/$4.25 on input but far below it on output; open-weights self-hosting at $0 is the escape hatch, keeping it well above the $3/$15 (~60) reference.
- **Overall Score: 63.6/100.** Mean of (60 + 58 + 70 + 65 + 65)/5 = 63.6. Best fit: fast, cheap, open-weights agentic conversational work (telecom/support-style agents, short-horizon terminal tasks) and self-hosted deployment — not the pick for long-horizon agentic projects, hard science reasoning, or webapp generation.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (Artificial Analysis model page + eval data, BenchmarkList 45-row benchmark profile with per-benchmark sources/dates, Mistral docs model card, Vals.ai runs, Context Arena, Gert Labs, arena.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mistral_4.md`, using the same headings.
