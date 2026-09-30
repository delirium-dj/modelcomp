# MiMo V2.6 (Free) — findings by Kimi K3

- Source: Xiaomi MiMo / MiMo-V2.6 (Zen free tier; weights `XiaomiMiMo/MiMo-V2.6-Flash-RL` / `MiMo-V2.6-Pro-RL`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 (Free)
- **Short description:** Xiaomi's latest omni-modal MoE built by scaling RL toward self-improvement ("You Only RL Once" mixed-domain GRPO). 309B total / 15B active (Flash-RL), 1M context, text+image+video+audio in. Released September 21, 2026 under MIT.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2-6-free` (free tier, per repo catalog); open weights (HF/ModelScope, MIT); also AI Studio, MiMo Code, Xiaomi MiMo Open Platform API, OpenRouter.
- **Release / knowledge:** Released 2026-09-21 (HF createdAt); knowledge cutoff not stated on card.
- **IDs:** `opencode/mimo-v2-6-free` (Zen); HF `XiaomiMiMo/MiMo-V2.6-Flash-RL`, `XiaomiMiMo/MiMo-V2.6-Pro-RL`.
- **Context window:** 1M tokens (official card: "Max Context Length 1M"); Zen catalog lists 128K total for the free deployment — capped tier.
- **Modalities:** text/image/video/audio in (native omnimodal); text out; reasoning (mimo parser); tool calls (mimo tool-call parser); JSON mode via serving stack. MTP/EAGLE speculative decoding.
- **Pricing (as of 2026-09-24):** Free Zen tier; open weights (MIT) → self-host; OpenRouter hosted rates not verified in my sources.
- **Architecture:** Sparse MoE 309B total / 15B activated (Flash-RL), 256 routed experts (8 active), 48 layers (39 SWA + 9 GA), 681M MiMo ViT vision encoder, 308M+127M audio encoders (official card).

### Raw benchmarks found (official card table; Flash column unless noted; vendor-run)

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (Pro 89.9%; vs Claude Opus 5 89.1, GPT-5.6 Sol 88.8) (HF card)
- Terminal-Bench 4.0: **28.8%** (Pro 34.9%; vs Opus 5 49.0) (HF card)
- Toolathlon-Verified: **73.6%** (Pro 76.9%) (HF card)
- AutomationBench v1.0.6: **52.3%** (Pro 53.1%; both beat Opus 5 50.3 / Sol 45.8) (HF card)
- OSWorld-Verified: **80.8%** (Pro 82.0%) (HF card)
- JobBench: **61.2%** (Pro 62.0%); Agents' Last Exam: **27.6%** (Pro 31.6%) (HF card)
- GDPval-AA 2.1: **1673** for Pro (Flash not measured) (HF card)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- No GPQA/HLE/LCR/CritPt rows on the official card; AA indices: no verified public score found (card focuses on agentic/coding/cyber/visual suites).

Coding:

- DeepSWE v1.1: **67.9%** (Pro 71.9%; ≈ Fable 5 70.0) (HF card)
- ProgramBench: **26.0%** (Pro 26.5%); MiMo Code Bench: **61.2%** (in-house; Pro 63.2) (HF card)
- SWE-bench (Vals/Verified) / LiveCodeBench / SciCode: no verified public score found

Cybersecurity (vendor table): CyberGym **95.1%** (Pro 94.0%), MiMo Cyber Bench 77.2%, ExploitGym 6.0%, ExploitBench **25.3%** (Pro 47.9%), SEC Bench Pro 47.5% (HF card).

Long context:

- 1M window by spec; no MRCR/RULER/GraphWalks public score found.

Multimodal:

- MiMo VisualCoding: **71.5%** (Pro 72.3%; vs Opus 5 70.0) (HF card); audio+video input by architecture; no MMMU/CharXiv row on card.

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.1 87.6%, Toolathlon 73.6%, AutomationBench 52.3%, OSWorld-Verified 80.8% across one mixed-RL run is impressive breadth; capped by TB 4.0 28.8% and ALE 27.6%.
- **Reasoning: 62/100.** No public GPQA/HLE/math rows for this checkpoint; RL-scaling claims are qualitative. Capped by absent hard-reasoning evidence.
- **Context window: 85/100.** Native 1M with agent-trace focus; capped by unmeasured max-window retrieval and Zen free tier's 128K cap.
- **Multimodal: 88/100.** True omnimodal: image + video + audio encoders in one model with VisualCoding 71.5%; text-only output caps it.
- **Coding: 80/100.** DeepSWE 67.9% rivals Fable 5's 70.0 at open weights; capped by ProgramBench 26% and in-house-heavy evidence.
- **Cost efficiency: 97/100.** Free Zen tier + MIT open weights; among the cheapest paths to this capability class.
- **Overall Score: 80/100.** Mean of the five quality dims (84+62+85+88+80)/5 = 79.8 → 80. Best fit: free/cheap omnimodal agentic coding with strong cyber exercises; verify hard-reasoning needs yourself — vendor table omits them.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (official HF model card incl. vendor evaluation table, HF hub metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
