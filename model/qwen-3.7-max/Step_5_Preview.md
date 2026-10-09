# Qwen3.7-Max — findings by Step 5 Preview

- Source: Alibaba Qwen (`qwen3.7-max`, snapshot `qwen3.7-max-2026-05-20`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Max (preview 2026-05-17, GA 2026-05-20 at the Alibaba Cloud Summit; superseded by Qwen3.8-Max on 2026-08-03)
- **Short description:** Alibaba's "agent-era" flagship — closed-weights, API-only, with a 1M-token context (double Qwen3.6-Max-Preview's 256K) and the pitch of agent capability breadth: coding, office/productivity work, and long-horizon autonomous execution. Its headline demonstration was a **35-hour fully autonomous kernel-optimization run spanning 1,000+ tool calls**. At launch it scored 56.6 on the AA Intelligence Index v4.0 — #5 overall and the highest-placed Chinese model at the time, +4.8 over Qwen3.6-Max-Preview — with SWE-bench Verified 80.4%, Terminal-Bench 2.0 69.7%, MCP-Atlas 76.4%, GPQA 92.4% and HLE 41.4%. The May-20 snapshot that the `qwen3.7-max` alias resolves to is **text-only**; the 2026-06-08 snapshot added vision.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.7-max`), OpenRouter, Together AI; OpenAI- and Anthropic-compatible APIs; drivable from Claude Code.
- **Release:** 2026-05-20 (preview 2026-05-17).
- **Context window:** 1M tokens (984K; 983K in thinking mode); max output 65,536–131K.
- **Modalities:** Text in → text out (the May-20 snapshot; the June-08 snapshot added visual understanding).
- **Pricing (as of 2026-10-09):** $2.50/M input, $7.50/M output, $0.25–0.50 cache (list); 50% launch promo $1.25/$3.75; current cheapest routes ~$1.475/$4.425; free on Alibaba Token Plans.
- **Speed:** 0 measured tok/s in Sophon's catalog (i.e., not ranked); LiveBench composite 74.1.

### Raw benchmarks found

Launch (Alibaba / AA v4.0):

- AA Intelligence Index: **56.6** (#5 overall; highest Chinese model at launch; Qwen3.6-Max-Preview 51.8)
- SWE-bench Verified: **80.4%**; SWE-bench Pro: **60.6%**; Terminal-Bench 2.0 (Terminus): **69.7%**; MCP-Atlas: **76.4%**
- GPQA Diamond: **92.4%**; HLE: **41.4%**
- 35-hour autonomous kernel-optimization demo (1,000+ tool calls)

Third-party:

- Epoch AI (max effort): OTIS Mock AIME **95.6%**; GPQA Diamond **90.9%**; SWE-V **77.3%**; SimpleQA Verified **55.8%**; FrontierMath T1-3 v2 **64.6%** (T4 34.1%); Chess 19%; Mystery Game 29%; EBR-bench 9.5%; LiveBench 74.1; ECI 154 (#40 of 257)
- Sophon/AA aggregation: τ²-bench **94.7%** (#15 of 321); IFBench **80.5%**; TB Hard 50.8%; SciCode 48.8%; HLE 40.5%; Vibe Code Bench v1.1 47.7%; ProofBench 26.0%; TaxEval 75.3%; CorpFin v2 63.7%; Finance Agent v2 47.8%; LiveBench coding 74.2 / reasoning 83.3 / math 85.2 / data analysis 71.8 / language 79.7
- Vals AI: **Vals Index 57.29% (#5)**; SWE-V 68.8% (66.7% on the subset); TB 2.0 59.2%; CorpFin 65.4%; Finance Agent 48.4%; Vibe Code Bench subset 52.9%; ProofBench 26.0% — $2.85 per test
- modelbenchmark.io composite: 78th percentile of 341 (coding 89th, math 82nd, reasoning 70th)

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP-Atlas 76.4%, τ²-bench 94.7% (#15), Terminal-Bench 2.0 69.7% (59.2% on Vals' harness), IFBench 80.5% and the 35-hour/1,000-tool-call demo make a strong upper-mid agentic profile; no GDPval or Toolathlon number and the Vals/AA harness gap cap it below the frontier band.
- **Reasoning: 82/100.** GPQA Diamond 90.9–92.4%, HLE 40.5–41.4%, OTIS AIME 95.6%, FrontierMath T1-3 64.6% and the launch AA index of 56.6 are upper-band; CritPt-class physics and Chess (19%) are weak, and AA's current index has it mid-table after the GPT-5.6/Claude-5 generation shipped.
- **Context window: 88/100.** A 1M-token window (984K) is the ≥1M band (95–100), docked because Alibaba publishes no MRCR/RULER/AA-LCR retrieval curve and the 35-hour demo is an existence proof, not a systematic long-context measurement.
- **Multimodal: 12/100.** The `qwen3.7-max` alias resolves to the 2026-05-20 snapshot, which is **text-only** — the methodology's text-only band (10–20); vision arrived in the separate 2026-06-08 snapshot and was never benchmarked publicly.
- **Coding: 82/100.** SWE-bench Verified 80.4% (77.3% Epoch / 68.8% Vals — harness-dependent), SWE-Pro 60.6%, TB 2.0 69.7% and TB Hard 50.8% are strong frontier-adjacent coding for a closed-weight model; Vibe Code Bench 47.7% and ProofBench 26.0% are the gaps.
- **Cost efficiency: 85/100.** $2.50/$7.50 list (half off at launch; ~$1.475/$4.425 on the cheapest routes; free on Token Plans) maps to the methodology's ~$1.25/$4.25 ≈ 88 range, with 50%-off batch and 80%-discounted cache reads.
- **Overall Score: 68/100.** Best-fit recommendation: the closed-weight Chinese flagship of May 2026 — #5 in the world on AA at launch with 1M context and a 35-hour autonomy demo at $2.50/$7.50; text-only at the shipped snapshot, superseded by Qwen3.8-Max within ten weeks.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Alibaba Cloud Model Studio model/pricing docs, AI/TLDR launch summary, Epoch AI, Vals AI, Sophon and modelbenchmark.io aggregations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen4_Max.md`, using the same headings.
