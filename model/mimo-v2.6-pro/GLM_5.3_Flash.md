# MiMo 2.6 Pro — findings by GLM 5.3 Flash

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo 2.6 Pro (vendor style: MiMo-V2.6-Pro)
- **Short description:** Xiaomi's flagship open-weight reasoner — a natively omnimodal trillion-parameter sparse MoE trained with large-scale agentic RL ("You Only RL Once"), aimed at long-horizon coding, cybersecurity, computer-use and knowledge work. The strongest open-weights model on the Artificial Analysis Intelligence Index at launch (46.32 on v4.3), priced far below closed frontier peers. Not a variant of another entry; MiMo-V2.5 series was retired 2026-10-21.
- **Provider / access:** Xiaomi MiMo API, model ID `mimo-v2.6-pro` at `https://api.xiaomimimo.com/v1` — OpenAI Chat Completions protocol (`chat.completions`) with an Anthropic-protocol-compatible endpoint for Claude Code/Cline-style tools; reasoning toggled via `thinking` parameter. Also on OpenRouter as `xiaomi/mimo-v2.6-pro` and via GMI Cloud/Novita. Open weights on Hugging Face: `XiaomiMiMo/MiMo-V2.6-Pro-RL`.
- **Release / knowledge:** Released 2026-09-21 (Sept 22 Beijing time; per Artificial Analysis and Vals AI), open-sourced with weights, RL environments and framework; technical report arXiv:2610.11959 (2026-10-08). Knowledge cutoff: no verified official statement found (docs sample prompts are boilerplate and not a spec).
- **IDs:** `mimo-v2.6-pro` (Xiaomi first-party), `xiaomi/mimo-v2.6-pro` (OpenRouter), `XiaomiMiMo/MiMo-V2.6-Pro-RL` (HF weights). No Free hosted ID found this pass — the free-promo route applies to MiMo-V2.6-Flash, not Pro; self-hosting (MIT) is the $0 path.
- **Context window:** 1M tokens total (1,048,576) / max output 128K (131,072 per OpenCode/OpenRouter configs; Xiaomi's spec page states "Context Window 1M tokens, Max Output 128K") — verified via the Xiaomi model page and Artificial Analysis; rate limits 100 RPM / 10M TPM.
- **Modalities:** Text, image, video and audio in; text out. Deep thinking (reasoning, toggleable), tool calls, streaming, web search (billed separately), structured output (JSON), context caching. Note: some tooling configs (e.g. OpenCode sample) list text+image only — verify audio/video on your route before building pipelines.
- **Pricing (as of 2026-11-02):** $0.435 in / $0.87 out per 1M tokens; cache-hit input $0.0036 (99% discount); domestic CNY ¥3 / ¥6 per 1M (cache hit ¥0.025). Batch API at 50% ($0.2175 / $0.435). UltraSpeed serving variant 10× ($4.35 / $8.70). Web search billed separately (~$5 per 1,000 calls outside China). Artificial Analysis blended ≈ $0.18 per 1M and ≈ $0.26 per Intelligence-Index task.
- **Architecture:** Open-weight sparse MoE, 1.02T total / 42B active parameters (384 experts / 8 activated), 70 layers (60 SWA + 10 GA), hidden 6144, SWA window 128, hybrid sliding-window + global attention; 5-layer MTP speculative decoder (7 tokens/pass); MiMo ViT 681M + audio encoders 308M/127M; pretrained on 30T tokens (27T text + 3T omni), MXFP4 quantization-aware mid-training, context extended to 1M; RL: asynchronous GRPO (1,568 prompts × 16 rollouts/step, ~$2.6M disclosed compute). License: MIT.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi model card, harbor harness, HF-published eval result); Vals AI independent rerun: **67.79%** (#33/73) — large vendor-vs-independent gap
- Terminal-Bench 4.0: **34.9%** (vendor, HF-published eval result); **31.31%** (Vals AI, #23/59) — well behind closed frontier (Claude Opus 5: 49.0, GPT-6 Astra: 59.6, vendor-reported)
- Terminal-Bench-Science 0.1: **2.86%** (Vals AI, #34/43) — weak spot
- Toolathlon-Verified: **76.9%** (vendor, HKUST harness, HF-published eval result; Claude Opus 5: 80.6)
- GDPval-AA v2.1: **Elo 1673** (vendor citing Artificial Analysis; Claude Opus 5: 1708, Claude Fable 5.1: 1735, GPT-5.6 Sol: 1588)
- AutomationBench v1.0.6: **53.1%** (vendor; above Claude Opus 5's 50.3)
- OSWorld-Verified: **82.0%** (vendor; Claude Opus 5: 83.4)
- JobBench: **62.0%** (vendor)
- Agents' Last Exam: **31.6%** (vendor, HF-published eval result; ties Claude Opus 5)
- Tau2/Tau3-Bench, MCP-Atlas: no verified public score found
- Cybersecurity (vendor, differentiating): CyberGym **94.0%**, SEC Bench Pro **66.3%**, ExploitBench **47.9%**, ExploitGym **17.8%**; Vals CyberBench v1.1: **72.86%** (#3/47); Vals SRE Bench: **3.05%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.32** on v4.3 at launch — #1 open-weights, above GLM-5.3 (45) and Kimi K3 (44), tied with Grok 4.7, 5–7 pts below Claude/GPT frontier (Xiaomi announcement / AA leaderboard, Sept 2026); current AA page after the v5.0 rebase: **30**, #3 of 23 in its open-weights class, 4/4 intelligence units
- GPQA Diamond: no verified public score found
- HLE (HLE-Diamond): folded into AA's v5.0 Intelligence Index; no standalone verified public score found
- ARC-AGI: no verified public score found
- Vals ProofBench v1.1: **70.00%** (#19/52); Vals MysteryMechanism: **15.31%** (#27/29)
- Vals Index (24 benchmarks): **57.81%** (#16/32), $0.43/test
- AA-LCR, MLCR-AA, CritPt v2, AA-Omniscience: run inside AA's v5.0 index; no standalone verified public scores found this pass

Coding:

- DeepSWE v1.1: **71.9%** (vendor, HF-published eval result; RL lifted it from 58.4 to ~72.6; Claude Opus 5: 74.0)
- ProgramBench: **26.5%** (vendor) vs **0.50%** fully-resolved / 69.82% partial (Vals AI, #23/64) — large harness discrepancy, treat with caution
- Vibe Code Bench v1.1: **85.22%** (#16/123, Vals AI)
- IOI: **39.33%** (#37/46, Vals AI)
- SWE-bench Verified / SWE-Pro: no verified public score found; SWE-bench Multimodal: **41.25%** (#15/20, Vals AI)
- LiveCodeBench: no verified public score found
- MiMo Code Bench (in-house): **63.2%** (vendor)
- kingy.ai OpenCode hands-on (2026-09-21): **23/23** hidden checks on three coding/data tasks at ~$0.03 total, matching Claude Opus 5 (23/23, ~$1.03)

Long context:

- No MRCR / RULER / GraphWalks verified public score found; the 1M window is vendor-verified (pretrained at 256K, mid-trained/RL at up to 1M-token sequences) but no standard retrieval benchmark is published. Vals AI observed failures from hitting the 128K output cap on long agentic tasks (notably Code Migration).

Multimodal:

- MiMo VisualCoding: **72.3%** (in-house vendor benchmark; above Claude Opus 5's 70.0, below GPT-6 Astra's 82.2)

Caveats: Artificial Analysis measures the first-party API at 43.7 output tokens/s (TTFT 3.45s) and calls it "somewhat verbose" (130M output tokens per index run, vs 100M median). Vals AI separately reported that two-thirds of Xiaomi's released coding RL environments leak the fix in git history — a reward-hacking concern about training-data credibility, not a measured model defect; community sentiment (r/LocalLLaMA) is split on benchmark-vs-real-world behavior.

### Normalized scores (1–100)

- **Tool use: 85/100.** Verified near-frontier agent results — Toolathlon-Verified 76.9, OSWorld-Verified 82.0, GDPval-AA Elo 1673, AutomationBench 53.1, Terminal-Bench 2.1 89.9 (vendor) — capped by the harder Terminal-Bench 4.0 (31.3–34.9 vs 49–60 for the closed frontier), Vals' independent 67.79 on TB2.1, and Terminal-Bench-Science 2.86.
- **Reasoning: 80/100.** Top open-weights intelligence at launch (AA Index 46.32 on v4.3; 30 on the current v5.0 rebase, #3/23 open-weights class) plus Vals ProofBench 70.0 — capped by no verified GPQA Diamond, HLE or ARC-AGI score for this exact ID and weak MysteryMechanism (15.31).
- **Context window: 88/100.** Verified 1M-token window with 128K max output and genuine 1M-context mid-training/RL — capped by the absence of any verified long-context retrieval benchmark (MRCR/RULER/GraphWalks) and Vals-reported 128K output-cap failures on long agentic tasks.
- **Multimodal: 78/100.** Native omni-modal input (text, image, video, audio) verified by Xiaomi's spec page and Artificial Analysis, with in-house MiMo VisualCoding 72.3 — capped by text-only output, no third-party vision suite score, and a weak Vals SWE-bench Multimodal (41.25, #15/20).
- **Coding: 82/100.** DeepSWE v1.1 71.9 and Vibe Code Bench 85.22 (#16/123) near the closed frontier, plus a 23/23 independent OpenCode check at ~$0.03 — capped by the ProgramBench vendor-vs-Vals discrepancy (26.5 vs 0.50 full-resolve), Terminal-Bench 4.0 ~31–35, and no verified SWE-bench Verified / SWE-Pro / LiveCodeBench rows.
- **Cost efficiency: 96/100.** $0.435/$0.87 per 1M with a 99% cache discount, 50% batch pricing and MIT weights for self-hosting; $0.13–0.26 per AA index task vs $2.00 (Kimi K3) to $7.63 (Claude Fable 5.1) for peers, and a full AA index run at $206.66 vs $7,274.74 for Opus 5 — flagship-class intelligence at a small fraction of frontier cost; not $0, so not 100.
- **Overall Score: 83/100.** (85+80+88+78+82)/5 = 413/5 = 82.6 → 83. Best fit: self-hostable omnimodal agentic flagship for high-volume coding, automation and cybersecurity work at exceptional price/quality; keep a closed frontier model as the baseline for the hardest long-horizon terminal tasks and deep science/math reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi — MiMo-V2.6-Pro model page (specs, pricing, capabilities)](https://mimo.mi.com/models/en-US/mimo-v2.6-pro)
  - [Xiaomi MiMo-V2.6 launch blog](https://mimo.xiaomi.com/mimo-v2-6)
  - [Hugging Face — XiaomiMiMo/MiMo-V2.6-Pro-RL model card & published eval results](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
  - [Technical report: MiMo-V2.6 — Scaling Reinforcement Learning Towards Self-Improvement (arXiv 2610.11959)](https://arxiv.org/html/2610.11959v1)
  - [Artificial Analysis — MiMo-V2.6-Pro intelligence, performance & price](https://artificialanalysis.ai/models/mimo-v2-6-pro)
  - [Vals AI — MiMo V2.6 Pro benchmark suite & evaluation note](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro)
