# Qwen 3.6 Plus — findings by Step 5 Preview

- Source: Alibaba / Qwen3.6-Plus (`opencode/qwen-3.6-plus`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's March/April 2026 hosted flagship — a hybrid linear-attention + sparse-MoE multimodal agentic model (397B-A17B class, 1M context, 65K output) with SWE-bench Verified 78.8% and tool-use leadership (τ³-bench 70.7%); superseded by Qwen3.7 Plus and later generations.
- **Provider / access:** Qwen Cloud API (`Qwen/Qwen3.6-Plus`), Together AI serverless (`Qwen/Qwen3.6-Plus`, "launching soon" serverless), OpenCode Zen (`opencode/qwen-3.6-plus`); Chat Completions API with thinking mode + `preserve_thinking`, function calling, JSON mode.
- **Release / knowledge:** released 2026-03-31/2026-04-01 (llm-stats, Together, serenitiesai); knowledge cutoff not published; superseded by Qwen3.7 Plus (folder meta).
- **IDs:** `Qwen/Qwen3.6-Plus` (Together), `opencode/qwen-3.6-plus` (Zen).
- **Context window:** 1,000,000 native; 65,536 max output (llm-stats).
- **Modalities:** text, image, video in; text out; always-on reasoning (thinking mode, `preserve_thinking` across agent turns); tool calls.
- **Pricing (as of 2026-10-21):** $0.50/$3.00 per 1M in/out for ≤256K context (Together, folder meta); cached input $0.05 (llm-stats).
- **Architecture:** proprietary hosted MoE on the Qwen3.5-Plus foundation — hybrid efficient linear attention + sparse MoE routing (folder meta: 397B-A17B class).

### Raw benchmarks found

Qwen official blog (qwen.ai/blog?id=qwen3.6) + Together AI model card + Artificial Analysis / Vals AI figures via BenchLM:

Agent / tool use:

- τ³-bench: **70.7%** (Qwen) — frontier-band (frontier ref ~50%+)
- τ²-bench: **97.7%** (Artificial Analysis via BenchLM; saturated harness)
- MCP-Tasks: **74.1%** (Qwen)
- WideResearch: **74.3%** (Qwen)
- Claw-Eval: **58.8%** (Claw-Eval leaderboard via BenchLM)
- QwenClawBench: **57.2%** (Qwen)
- Terminal-Bench 2.0: **61.6%** (Qwen)
- Terminal-Bench 2.1 (Vals): **53.2%** (Vals AI via BenchLM)
- MCP Atlas: **48.2%** (Qwen)
- VITA-Bench: **44.3%** (Qwen); DeepPlanning: **41.5%** (Qwen); Toolathlon: **39.8%** (Qwen)
- GDPval-AA: **1,066 Elo / 24.5%** normalized (Artificial Analysis via BenchLM) — well below the frontier band
- ResearchClawBench: **18.0%** (ResearchClawBench via BenchLM)
- Gert Labs: **50.6%** (Gert Labs rankings via BenchLM)
- GDPval-AA on Together's table: **32%** (Together AI benchmark table)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Qwen); **88.2%** (Artificial Analysis); **87.4%** (Vals AI)
- AIME 2026: **95.3%**; HMMT Feb 2025 **96.7%**, Nov 2025 **94.6%**, Feb 2026 **87.8%** (Qwen)
- MMLU-Pro: **88.5%** (Qwen); MMLU-Redux: **94.5%**; C-Eval: **93.3%**; SuperGPQA: **71.6%** (Qwen)
- HLE: **28.8%** (Qwen) / **27.8%** (Artificial Analysis) — mid band, below the 40%+ frontier ref
- Artificial Analysis Intelligence Index: **27.0%** (Artificial Analysis via BenchLM — mid reference band 20–35)
- AA-LCR (long-context reasoning): **78.3%** (Artificial Analysis via BenchLM)
- AI-Needle: **68.3%** (Qwen); LongBench v2: **62%** (Qwen)
- CritPt: **2.9%** (Artificial Analysis via BenchLM) — very weak
- AA-Omniscience: Accuracy **26.4%**, Hallucination Rate **34.6%** (Artificial Analysis via BenchLM)
- FrontierMath v2 Tiers 1–3: **38.2%** (Epoch AI via BenchLM)
- IFEval: **94.3%** / IFBench: **75.8%** (Qwen); **75.2%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **78.8%** (Qwen); **73.4%** (Vals AI via BenchLM)
- SWE-bench Pro: **56.6%** (Qwen)
- SWE Multilingual: **73.8%** (Qwen)
- LiveCodeBench v6: **87.1%** (Qwen); **86.0%** (Vals AI)
- Terminal-Bench 2.0: **61.6%** (Qwen; listed above)
- NL2Repo: **37.9%** (GLM-5.1 model card comparison table via BenchLM)
- Vibe Code Bench: **25.56%** (Vals AI v1.1 via BenchLM) — weak
- AA Coding Index: **54.5%** (Artificial Analysis via BenchLM)
- DeepSWE / SciCode on Together's table: no verified public score found (blank)

Long context:

- AA-LCR **78.3%** long-context reasoning (Artificial Analysis, via BenchLM); AI-Needle 68.3% / LongBench v2 62% (Qwen); 1M native window; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): MMMU 86.0%, MMMU-Pro 78.8% (Qwen) / 78.0% (AA), MathVision 88.0%, VideoMMMU 84.0%, CharXiv 81.5%, ScreenSpot Pro 68.2%, V* 96.9%, OmniDocBench 91.2% (all Qwen); Design Arena Website 1243 Elo (OpenRouter).

### Normalized scores (1–100)

- **Tool use: 84/100.** τ³-bench 70.7% and τ²-bench 97.7% are frontier-leaning tool-calling evidence, with MCP-Tasks 74.1% / WideResearch 74.3% / Claw-Eval 58.8% adding breadth; capped by Terminal-Bench 2.0/2.1 at 61.6%/53.2% (mid-band), GDPval 1,066 Elo (24.5% normalized — well short of the frontier), and weak ResearchClawBench 18.0%.
- **Reasoning: 80/100.** GPQA Diamond 88.2–90.4% and AIME 95.3% are strong, but HLE 27.8–28.8% sits mid-band, the AA Intelligence Index is 27.0 (mid reference), CritPt is 2.9%, Omniscience accuracy is 26.4% with a 34.6% hallucination rate, and FrontierMath v2 T1–3 is only 38.2% — knowledge depth is the cap.
- **Context window: 95/100.** 1M native context with 65K max output lands in the ≥1M tier; 100 requires ≥98% retrieval evidence at 512K+, and the published LCR 78.3% / AI-Needle 68.3% / LongBench v2 62% fall short of that bar.
- **Multimodal: 88/100.** Text, image and video input (video-in tier 75–90) with text-only output; MMMU 86.0%, MathVision 88.0%, VideoMMMU 84.0% and V* 96.9% are excellent, though ScreenSpot Pro 68.2% (GUI grounding) drags.
- **Coding: 76/100.** SWE-bench Verified 78.8% (Vals 73.4%) and LiveCodeBench v6 87.1% are strong mid-to-upper band, but SWE-bench Pro 56.6%, NL2Repo 37.9%, Vibe Code Bench 25.56% and AA Coding Index 54.5% keep it below the frontier DeepSWE/TB2.1 reference levels.
- **Cost efficiency: 88/100.** $0.50/$3.00 with $0.05 cached input matches the ~$0.60/$2.20 ≈ 92 band slightly on the expensive side for output — near the reference 88; ≥256K-context tiering noted as a caveat.
- **Overall Score: 85/100.** Mean of (84 + 80 + 95 + 88 + 76) / 5 = 84.6 → 85. Best fit: multimodal agentic coding and visual-screenshot-to-code work at a mid-tier price; knowledge-depth and newest-harness coding tasks still belong to the frontier closed models.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Together AI model card, Qwen official blog figures + Artificial Analysis/Vals AI/Claw-Eval/Epoch AI via BenchLM, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
