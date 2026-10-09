# Ling 2.6 1T — findings by GLM 5.3

- Source: inclusionAI / Ant Group (`inclusionAI/Ling-2.6-1T`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-1T (folder slug `ling-2.6.1t` — the size hyphen "2.6-1T" was collapsed to a dot by the project's slug normalizer; same model)
- **Short description:** Ant Group inclusionAI's trillion-parameter general flagship — an instant (instruct) hybrid MLA/linear-attention MoE for coding, long-document tasks, and multi-step agents; the base twin of the thinking model Ring-2.6-1T, with process-redundancy suppression for concise output and agentic training for tool calling and instruction execution.
- **Provider / access:** OpenRouter (`inclusionai/ling-2.6-1t`, free variant on kilo.ai); Hugging Face open weights (`inclusionAI/Ling-2.6-1T`); Opper listing ($0.30/$2.50, zero data retention). No OpenCode Zen ID found.
- **Release / knowledge:** 2026-04-23 (OpenRouter/BenchmarkList); knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-2.6-1T` (Hugging Face); `inclusionai/ling-2.6-1t` (OpenRouter).
- **Context window:** 262,144 tokens (OpenRouter spec, verified via BenchmarkList).
- **Modalities:** text in / text out; instant/instruct model (no extended thinking by default — ObviousBench run shows 0 reasoning tokens); tool calls per agentic training. Text-only.
- **Pricing (as of 2026-10-09):** $0.075 / 1M input, $0.625 / 1M output on OpenRouter (BenchmarkList; Opper lists $0.30/$2.50 on its own host); free on kilo.ai; open weights for self-hosting.
- **Architecture:** ~1T-parameter hybrid MLA/linear-attention Mixture-of-Experts, open weights (AA Openness Index 38.89 — weights available, no data or methodology transparency); sibling of Ring-2.6-1T (thinking variant, released two weeks later).

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **89.8%** (AA harness via BenchmarkList; rank 53/332 — 2.6pp behind Ring-2.6-1T)
- Terminal-Bench Hard: **31.1%** (AA harness; rank 70/326)
- GDPval-AA: **1045 Elo** (Artificial Analysis; rank 104/352 — 71st percentile)
- ClawProBench: **57.4 final** (rank 23/48; Tool Use 62.4%, Planning 70.5%, Efficiency 91.3%, Error Recovery 65.7%, Pass³ 36.5%)
- Gert Labs Rankings (agentic gaming/one-shot coding): **25.0% GScore** (rank 61/62 — bottom of the field)

Reasoning / knowledge:

- GPQA Diamond: **75.2%** (AA; rank 173/468, 63rd percentile)
- HLE: **8.7%** (AA; rank 220/478 — matches the methodology's mid-band "HLE <10%" anchor)
- Artificial Analysis Intelligence Index: **26.05** (#122/427, 72nd percentile; breakdown: SciCode 37%, AA-LCR 34.7%, AA-Omniscience -51, HLE 8.2%, CritPt 0.3%)
- ObviousBench: **68.8% answer pass³** (39th percentile — frequent obvious errors; format pass³ 99.3%)
- NYT Connections Extended: **10.8%** (rank 64/64 — last)

Coding:

- BLXBench: **75.3%** (283/373 tests; 109.6 tok/s decode; rank 8/25 — community leaderboard)
- SciCode: **37.0%** (AA-verified; rank 141/296)
- SWE-bench Verified / LiveCodeBench / Terminal-Bench 2.1: no verified public score found

Long context:

- AA-LCR: **41.7%** (rank 217/408 — weak long-context reasoning; Ring-2.6-1T scores 70.0% on the same benchmark)
- MRCR / RULER: no retrieval-rate benchmark found

Multimodal:

- Text-only model — no verified multimodal benchmark exists

### Normalized scores (1–100)

- **Tool use: 60/100.** Strong conversational agent work (Tau2 Telecom 89.8%) and a mid-band GDPval 1045 Elo with a balanced ClawProBench profile (tool use 62.4%, planning 70.5%), but Gert Labs' 25.0% agentic-gaming GScore (61/62) and TB Hard 31.1% cap complex agent performance.
- **Reasoning: 56/100.** Textbook mid-band: GPQA 75.2% (in the 60–80% mid range), HLE 8.7%, AA II 26.05 — but AA-Omniscience of -51 and CritPt 0.3% reveal unreliable knowledge and near-zero physics reasoning, and ObviousBench 68.8% shows avoidable errors.
- **Context window: 72/100.** Verified 262,144-token window sits in the 200K–500K tier just above the 200K=70 anchor; AA-LCR 41.7% shows it uses that window poorly (vs Ring's 70%).
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 58/100.** BLXBench 75.3% (71st percentile community run) is respectable and SciCode 37% is mid-tier, but no verified SWE-bench Verified number exists and the Gert Labs one-shot coding slice is weak.
- **Cost efficiency: 95/100.** $0.075/$0.625 per 1M on OpenRouter with a free kilo.ai variant and open weights — near the ~$0.10/$0.20 ≈ 97–99 anchor; ClawProBench and BLXBench runs recorded $0 cost.
- **Overall Score: 52/100.** Half-up mean of (60 + 56 + 72 + 15 + 58) = 52.2 → 52. Best fit: cheap open-weights instruct workhorse for conversational agents and routine coding in high volume — its thinking sibling Ring-2.6-1T (or Ling-3.0-flash) is the better pick for reasoning-heavy work.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/GLM-5.3)** — 2026-10-09
- Method: public internet research (BenchmarkList 14-benchmark profile with AA-verified rows, OpenRouter/Opper/kilo listings, llmdb architecture notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
