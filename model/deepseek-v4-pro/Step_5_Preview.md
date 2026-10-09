# DeepSeek V4 Pro — findings by Step 5 Preview

- Source: DeepSeek (`deepseek-v4-pro`; GA build `DeepSeek-V4-Pro-0813`, weights `deepseek-ai/DeepSeek-V4-Pro-0813`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Pro (preview 2026-04-24; GA 2026-08-13 as `-0813`)
- **Short description:** DeepSeek's flagship and the largest open-weight model under a classic OSI license — a 1.6T-parameter MoE (49B active) with the V4 family's hybrid Compressed Sparse Attention + Heavily Compressed Attention (27% of V3.2's single-token FLOPs and 10% of its KV cache at 1M context), mHC residual connections, Muon optimizer, 20T-token FP8 pre-training (experts in FP4), a DSpark speculative-decoding module, and SFT→domain-RL→MOPD post-training. The 0813 GA build is a re-post-training of the April preview with gains concentrated in agentic work (vendor: TB 2.1 72.1→87.9, DeepSWE 12.8→62.7, CyberGym 52.7→83.3) — but those numbers come from DeepSeek's own harness, and Vals AI's independent Terminus-2 run measures TB 2.1 at 54.68%, a 33-point gap. DeepSeek's own technical report concedes it trails GPT-5.4/Gemini 3.1 Pro by ~3–6 months — the most credible line in the release.
- **Provider / access:** MIT open weights (892.8 GB across 92 shards) on Hugging Face/ModelScope; DeepSeek API (`deepseek-v4-pro`), 21+ OpenRouter providers.
- **Release:** GA 2026-08-13.
- **Context window:** 1,048,576 tokens; max output 384K.
- **Modalities:** Text in → text out (no vision); three effort modes (low/high/max, default high).
- **Pricing (as of 2026-10-09):** since 2026-08-16 DeepSeek bills peak/off-peak — peak $1.32/M input, $3.96 output, $0.044 cache; off-peak half ($0.66/$1.98/$0.022); AA measured $0.67 per Intelligence-Index task vs Claude Opus 5's $5.86.
- **Architecture:** MoE 1.6T/49B, CSA+HCA, mHC, Muon, DSpark speculative decoding.

### Raw benchmarks found

Vendor (0813 model card, DeepSeek Harness "minimal mode", max effort; Opus 4.8 / Fable 5 / Kimi K3 / GLM-5.2 in parentheses):

- Terminal-Bench 2.1: **87.9** (Opus 4.8 85.0, Fable 5 88.0, Kimi K3 88.3, GLM-5.2 81.0)
- DeepSWE: **62.7** (Fable 70.0, Kimi K3 67.5, Opus 4.8 58.0); CyberGym: **83.3** (Fable 83.1, Opus 4.8 78.3)
- NL2Repo: **61.5** (Opus 4.8 69.7); Toolathlon-Verified: **74.1** (Opus 4.8 76.2); Agents' Last Exam: **25.7** (Kimi K3 27.6)
- AutomationBench Public: **31.8** (Kimi K3 30.8, Opus 4.8 27.2); DSBench-FullStack: 71.1; DSBench-Hard: 67.2 (both internal)
- HLE: **42.7** no tools / **60.0** with tools (Opus 4.8 49.8/57.9); GPQA Diamond: **90.1** (Fable 5 93.6, Opus 4.8 91.3)
- SWE-bench Verified: 80.6 (technical report, April harness); SWE-bench Pro: 55.4; SWE-Multilingual: 76.2; MRCR 1M 83.5; CorpusQA 1M 62.0; LCB 93.5; Codeforces 3206; IOI 2025 580.1; MMLU-Pro 87.5; SimpleQA 57.9; MCP-Atlas 73.6; GDPval-AA Elo 1554

Independent:

- Artificial Analysis: Intelligence Index **53.2** (max effort — 3rd of ~106; preview 52); Coding Index **68.8**; Agentic Index **49.6**; GPQA Diamond 90.1–92.4; HLE 39.34% no-tools
- Vals AI: **SWE-bench Verified 96.4%** (±0.83, max effort — era-1 saturated; preview 77.4 on the same harness); **Terminal-Bench 2.1 54.68%** (Terminus 2 reference harness); MMLU-Pro 86.97; ARC-AGI-1 **90.5%** / ARC-AGI-2 **61.3%** (ARC Prize-verified)
- Epoch AI: OTIS Mock AIME 98.6%; FrontierMath T1-3 64.6% / T4 26.8%; SimpleQA Verified 52.9%; Chess Puzzles 47.0%; Mystery Game 43.0%
- Preview-era AA note: GDPval-AA 1,554 Elo (leading open weights) with a **94% hallucination rate**

### Normalized scores (1–100)

- **Tool use: 72/100.** Toolathlon-Verified 74.1%, AutomationBench 31.8% (best in its comparison set), MCP-Atlas 73.6% and GDPval-AA Elo 1,554 are strong; the 33-point vendor-vs-independent gap on Terminal-Bench 2.1 (87.9 vs 54.68 on the reference Terminus 2 harness) and AA Agentic Index 49.6% cap it below the frontier band — the agentic numbers are harness-sensitive.
- **Reasoning: 86/100.** GPQA Diamond 90.1–92.4%, HLE 39.3–42.7%, ARC-AGI-2 61.3%, MMLU-Pro 87.0%, FrontierMath T1-3 64.6% and AA Intelligence Index 53.2 (3rd-highest max-effort score) are frontier-band; SimpleQA Verified 52.9% and the 94% hallucination rate show the knowledge-reliability catch.
- **Context window: 92/100.** A verified 1M window with the V4 attention redesign explicitly built for it (27% FLOPs, 10% KV of V3.2 at 1M) plus published retrieval numbers — MRCR 1M 83.5%, CorpusQA 1M 62.0% — the ≥1M band, docked only because retrieval is not the ≥98% at 512K+ the top of the band describes.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20); DeepSeek's pricing page confirms V4 Pro has no vision support (vision lives in the separate Vision-Exp variant).
- **Coding: 82/100.** SWE-bench Verified 96.4% (Vals, saturated era-1 benchmark), SWE-Pro 55.4%, DeepSWE 62.7%, CyberGym 83.3%, LCB 93.5% and Codeforces 3,206 — near-frontier coding with an independent caveat on the agentic-terminal side (TB 54.68%).
- **Cost efficiency: 90/100.** MIT weights plus $0.66/$1.98 off-peak ($1.32/$3.96 peak, $0.022–0.044 cache) and AA's measured $0.67 per Index task — roughly a ninth of Opus 5's per-task cost — the methodology's ~$0.6/$2.2 ≈ 92 range; the Aug-2026 price increase (2.3–4.6×) is why it isn't higher.
- **Overall Score: 69/100.** Best-fit recommendation: the frontier-value open-weights pick — near-frontier reasoning and coding with 1M context at a ninth of closed-frontier per-task cost, MIT-licensed; read every agentic number with its harness attached (vendor TB 87.9 vs independent 54.7), and expect confident answers (94% hallucination) when it doesn't know.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (DeepSeek HF model card + GA coverage, Artificial Analysis, Vals AI via AI Model Timeline, ARMES, OpenLLMStack pricing analysis, Tokenhot); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V5.md`, using the same headings.
