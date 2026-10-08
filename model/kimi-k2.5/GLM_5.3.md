# Kimi K2.5 — findings by GLM 5.3

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight agentic model (Hugging Face `moonshotai/Kimi-K2.5`, non-reasoning default with a Reasoning sibling) — elite math and browsing/tool results on paper, with native image and video understanding; positioned between K2.6 and K2 in the Kimi line.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.5` at `https://opencode.ai/zen/v1/chat/completions` ($0.60 in / $3.00 out, cached read $0.10 — Zen pricing table, live 2026-10-08); self-host via open weights.
- **Release / knowledge:** 2026 (exact date not pinned on tracked pages); knowledge cutoff not stated.
- **IDs:** `opencode/kimi-k2.5`; Hugging Face `moonshotai/Kimi-K2.5`. No Free ID.
- **Context window:** 256K (BenchLM).
- **Modalities:** text, image, video in (video verified via Video-MME/MMVU results); text out; reasoning variant exists; tool calls yes; JSON mode not verified.
- **Pricing (as of 2026-10-08):** $0.60 in / $3.00 out per 1M on Zen (cached $0.10); open weights allow free self-hosting.
- **Architecture:** open weights (license per HF repo); parameters undisclosed on tracked pages; MoE per family lineage.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **95.9%** (Artificial Analysis via BenchLM)
- DeepSearchQA: **77.1%** (Moonshot K2.5 model card via BenchLM)
- WideResearch: **72.7%** (model card via BenchLM)
- τ³-bench: **65.7%** (Qwen3.6-Plus comparison table via BenchLM)
- BrowseComp: **60.6%** (model card via BenchLM)
- MCP-Tasks: **59.1%** (Qwen comparison table via BenchLM)
- QwenClawBench: **54.3%** / Claw-Eval: **52.3%** (Qwen table / Claw-Eval leaderboard via BenchLM)
- Terminal-Bench 2.0: **50.8%** (model card via BenchLM)
- Gert Labs: **45.88%** (Gert Labs via BenchLM)
- GDPval-AA: **936** (17.2% normalized) (AA via BenchLM)
- Toolathlon: **27.8%** / MCP Atlas: **29.5%** / DeepPlanning: **14.4%** (model card / Qwen table via BenchLM)
- APEX-Agents-AA: **11.5%** / ResearchClawBench: **14.0%** / JobBench: **8.7%** (AA / leaderboards via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **87.6%** (model card) / **87.9%** (AA harness) (BenchLM)
- AIME 2025: **96.1%** / AIME26: **95.8%**; HMMT Feb 2025 **95.4%** / Nov 2025 **91.1%** / Feb 2026 **87.1%** (model card via BenchLM)
- MMLU-Pro: **87.1%**; SuperGPQA **69.2%** (model card / Qwen table via BenchLM)
- HLE: **30.1%** (model card) / **30.7%** (AA) (BenchLM)
- FrontierMath v2: **27.9%** (Tiers 1–3) / **4.2%** (Tier 4) (Epoch AI via BenchLM)
- AA-LCR: **78.0%** / LongBench v2: **61%** (AA / model card via BenchLM)
- CritPt: **3.1%** (AA via BenchLM)
- Artificial Analysis Intelligence Index: **23.5** (AA via BenchLM)
- AA-Omniscience Index: **-7.3** (accuracy 35.2%, hallucination rate 65.7%) (AA via BenchLM)

Coding:

- LiveCodeBench v6: **85.0%** (model card via BenchLM)
- SWE-bench Verified: **76.8%** (model card; Arcee table 70.8%) (BenchLM)
- React Native Evals: **77.2%** (leaderboard via BenchLM)
- SWE Multilingual: **73%** (model card via BenchLM)
- SWE-Rebench: **58.5%** (leaderboard via BenchLM)
- SWE-bench Pro: **50.7%** / SciCode: **48.7%** (model card via BenchLM)
- AA Coding Index: **46.8%** (AA via BenchLM)

Multimodal:

- Video-MME: **87.4%** / MMVU: **80.4%** (Kimi blog via BenchLM)
- VideoMMMU: **86.6%** (Qwen multimodal table via BenchLM)
- MMMU-Pro: **78.5%** (model card) / **75.4%** (AA harness) (BenchLM)
- Design Arena Website: **1255** (OpenRouter via BenchLM)

Instruction following / multilingual:

- IFEval: **93.9%** (Qwen table via BenchLM); AA-IFBench: **70.2%** (AA)
- MMLU-ProX: **82.3%**; NOVA-63: **56.0%** (Qwen table via BenchLM)

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench 95.9%, DeepSearchQA 77.1%, WideResearch 72.7% and BrowseComp 60.6% are strong; capped by Toolathlon 27.8%, MCP Atlas 29.5%, JobBench 8.7%, APEX-Agents 11.5% and GDPval-AA 936 — excellent at conversational tool use, weak at deep agentic execution.
- **Reasoning: 76/100.** AIME 95.8–96.1%, GPQA 87.6% and MMLU-Pro 87.1% are near-frontier; capped by HLE ~30%, CritPt 3.1%, FrontierMath v2 ≤28%, AA Index 23.5 and a 65.7% hallucination rate.
- **Context window: 72/100.** 256K sits just above the 200K (=70) tier floor; AA-LCR 78.0% and LongBench v2 61% are moderate, not exceptional.
- **Multimodal: 82/100.** Image input AA-verified (MMMU-Pro 75.4%) with strong vendor video results (Video-MME 87.4%, MMVU 80.4%) — solid video tier; capped by text-only output.
- **Coding: 74/100.** LiveCodeBench v6 85.0% and SWE-bench Verified 76.8% are strong; capped by SWE-bench Pro 50.7%, SciCode 48.7% and AA Coding Index 46.8%.
- **Cost efficiency: 90/100.** $0.60/$3.00 per 1M with $0.10 cached reads sits in the ~$0.60/$2.20 class (~92) with a small output premium; open weights enable free self-hosting.
- **Overall Score: 75/100.** (72 + 76 + 72 + 82 + 74) / 5 = 75.2 → 75. Best-fit recommendation: open-weights math/research assistant and browsing agent with video understanding at mid-tier pricing; verify facts (65.7% hallucination rate) and prefer a stronger executor for long-horizon agentic chains.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (Moonshot model card + Kimi blog via BenchLM, Artificial Analysis, Epoch AI, Zen pricing table); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-run numbers were discounted where AA-run equivalents disagreed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
