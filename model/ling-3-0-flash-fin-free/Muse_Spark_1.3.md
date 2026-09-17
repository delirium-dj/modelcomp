# Ling 3.0 Flash Fin Free — findings by Muse Spark 1.3

- Source: Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free
- **Short description:** Finance-enhanced MoE reasoning model by InclusionAI / Ant Group for financial research, multi-step investment workflows, and tool-intensive tasks, retaining strong coding/math. Free tier on OpenCode Zen.
- **Provider / access:** OpenCode Zen (`opencode/ling-3.0-flash-fin-free`), `https://opencode.ai/zen/v1/chat/completions`; also Vercel AI Gateway (`inclusionai/ling-3.0-flash-fin-free`, free through 2026-09-25 per changelog)
- **Release:** 2026-08-27 (Vercel changelog); base Ling-3.0-flash 2026-07-27. Thinking mode enabled by default (temp 1.0, top_p 0.95, top_k 20 for Fin).
- **IDs:** `ling-3.0-flash-fin-free`
- **Context window:** **262,144 (Zen/Pi) / 256,000 (Vercel/HF)**; 32,768 / 32,000 max output. Base architecture natively 256K, scalable to 1M per Ant. Independent test confirmed hard limit 262,144.
- **Modalities:** text input, text output only; reasoning = yes; function calling = yes. No image/audio/video reported on Zen.
- **Pricing:** Free / Free / Free on Zen (limited time, data may be used to improve model). Base: 124B total, 5.1B active, hybrid-linear MoE (35 KDA + 7 MLA, 512 routed + 1 shared, 8 active).
- **Privacy:** free-period data may be used to improve the model — no confidential financial filings.

### Raw benchmarks found

- Terminal-Bench: vendor evaluation protocol documented (AA Terminus 2 harness, 256K, temp 0.6) but **no public numeric TB score found** as of 2026-09-17.
- Tau3-banking-AA: vendor lists as evaluated (AA leaderboard, GPT-5.4-mini user/judge) but **no public numeric score found**.
- Claw-Eval: **no verified public score found**.
- MCP-Atlas / SkillsBench / SWE-Bench Pro / Multilingual / MiniAppBench / AntSWEBench / GDPval v2-AA / FinFIRST / FinSearchComp / FinCRAFT / Finance Agent / APEX-Agents / SpreadsheetBench: vendor claims “strong” — numbers not published in sources fetched.
- Independent eval (frangelbarrera, 845 records, 12 phases): overall **7.0/10**; MMLU+GPQA 35/35 (100%, small sample); tool-calling schema 45/45 valid, 0/10 invented params; HumanEval 19/19 syntactically valid; logic recall 11/12.
- BenchLM base `ling-3-0-flash`: **53.9/100, #110/228**, strongest Instruction Following #24 (Fin variant likely similar + finance lift).

### Normalized scores (1–100)

- **Tool use: 68/100.** 10,000+ interactive envs, function calling, finance tool workflows; penalized for no public TB/Tau3/Claw numbers.
- **Reasoning: 70/100.** Efficient hybrid reasoning, strong instruction following; small-sample MMLU/GPQA perfect but not frontier-scale evidence (no HLE/CritPt/MRCR).
- **Context window: 72/100.** 262K tier (200–500K band). Scalable to 1M per vendor but Zen cap is 262K/32K.
- **Multimodal: 15/100.** Text-only on Zen.
- **Coding: 72/100.** Vendor SWE-Pro/Multilingual/MiniApp claims + independent coding 8/10; no SWE-Verified/LiveCode public number.
- **Cost efficiency: 100/100.** $0 on Zen free tier.
- **Overall Score: 66/100.** Niche pick for finance + efficient execution; verify on SWE-Pro/Tau3 before general coding use.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
