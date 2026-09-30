# Muse Spark 1.3 Contributor (Free) — findings by Kimi K3

- Source: Meta / Muse Spark 1.3 (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (Free tier)
- **Short description:** Meta Superintelligence Labs' proprietary multimodal reasoning model for long-running agentic, multi-agent, and coding workflows, released September 2, 2026. Ships as two reasoning variants — 1.3 (xhigh), generally available, and 1.3 (max), limited partner preview — with gains concentrated in agentic and scientific work. The Contributor/Free tier on OpenCode Zen serves the 1.3 weights at $0 in exchange for training-data consent.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-contributor-free` (Chat Completions); paid tiers via Meta first-party API and Muse Code (`dev.meta.ai/models/muse-spark`). Meta also offers a lower-priced `muse-spark-1.3-contributor` SKU whose data may be used to improve Meta products (benchlm.ai).
- **Release / knowledge:** Released 2026-09-02 (artificialanalysis.ai, felloai.com); knowledge cutoff not officially stated — no verified public value found.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Free Zen ID); `muse-spark-1.3` and `muse-spark-1.3-contributor` on Meta API (benchlm.ai); Standard tier $1.25/$4.25.
- **Context window:** 1,048,576 (1M) tokens, unchanged from 1.2 (benchlm.ai; artificialanalysis.ai; llm-stats.com).
- **Modalities:** text/image/video input (artificialanalysis.ai; Zen listing also shows PDF in); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) $0 (training-data consent trade); Standard $1.25 input / $4.25 output per 1M, cached input $0.15 (llm-stats.com; artificialanalysis.ai); Contributor paid-SKU price not re-verified in my sources. 1.3 (xhigh) costs $0.55 per Intelligence Index task — the lowest of any model scoring 59+ (artificialanalysis.ai); 1.3 (max) pricing not yet public.
- **Architecture:** proprietary (Meta); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (benchlm.ai); **85% (xhigh) / 86% (max)** in the AA harness (artificialanalysis.ai); **72.3%** (Vals); aaTerminalBench21: **84.3%**; AA Terminal-Bench 4.0: **33.3%** (benchlm.ai)
- Tau3-Banking (AA): **52% (max) / 47% (xhigh)** — max is the new #1 on this eval (artificialanalysis.ai); benchlm.ai lists **50.5%**
- GDPval-AA v2: **1754 Elo (max) / 1709 Elo (xhigh)** (artificialanalysis.ai); benchlm.ai lists **1754** (**58.7%** normalized)
- OSWorld 2.0: **66.9%**; JobBench: **64.9%**; DeepSearchQA: **89.4%**; AutomationBench: **49.4%**; AA AutomationBench: **57.9%**; AA ITBench: **33.2%**; GDP.pdf: **26.6%**; ApprenticeBench: **19%** (benchlm.ai)
- AA Briefcase: **1587 Elo**; AA Agentic Index: **55.7%** (benchlm.ai)
- SWE-Atlas Codebase QnA: **59.4%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61 (xhigh) / 62 (max)** — xhigh ties GPT-5.6 Sol (max) and Grok 4.6 (high), behind only Claude Fable 5.1 and Opus 5 variants (artificialanalysis.ai); benchlm.ai's separately aggregated AA Index row shows **48.1%**
- GPQA Diamond (AA): **93.5%** (benchlm.ai); ~94% (xhigh) per artificialanalysis.ai
- HLE (AA-HLE): **48.7%** (benchlm.ai); ~47% (xhigh) per artificialanalysis.ai
- CritPt: **24.9%** (benchlm.ai); ~26% (xhigh) per artificialanalysis.ai (+8 pts vs 1.2)
- AA-LCR: **83.0%** (benchlm.ai); artificialanalysis.ai reports **79%** (−4 pts vs 1.2's 83%)
- MLCR-AA: **43.3%** (benchlm.ai)
- AA-Omniscience Accuracy / Hallucination Rate: **43.6% / 32.9%**; AA-Omniscience Index: **25.0%** (benchlm.ai)
- BenchLM overall: unranked (partial coverage, 35 of 486 benchmarks)

Coding:

- DeepSWE: **75.4%** (benchlm.ai; also in Meta's published table per layer3labs.io)
- AA Coding Index: **75.8**; AA-SciCode: **58.8%** (~59% per artificialanalysis.ai); CursorBench 4.0: **41.6%** (benchlm.ai)
- SWE-Atlas Codebase QnA: **59.4%** (benchlm.ai)
- SWE-bench Verified / SWE-Pro: no verified public score found; LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 256K–512K: **98.5%**; MRCR v2 512K–1M: **98.1%** (benchlm.ai) — near-ceiling retrieval across the full 1M window.

Multimodal:

- Design Arena Website: **1365 Elo** (benchlm.ai); video input confirmed (artificialanalysis.ai); no verified public MMMU/CharXiv score found.

### Normalized scores (1–100)

- **Tool use: 90/100.** Tau3-Banking 52% (#1 overall, max), Terminal-Bench 2.1 85–88.8% (harness-dependent), GDPval v2 1709–1754 Elo, Agentic Index 55.7% — best-in-class agentic posture; capped by Vals TB 72.3%, TB 4.0 33.3%, ITBench 33.2% and ApprenticeBench 19%.
- **Reasoning: 90/100.** AA Intelligence Index 61/62 places 1.3 at the frontier tier (only Claude Fable 5.1 / Opus 5 variants ahead), with GPQA 93.5–94% and HLE 47–48.7%; capped by CritPt ~25% and below-average Omniscience accuracy (43.6%).
- **Context window: 100/100.** Full 1M window with 98%+ MRCR v2 retrieval verified in both measured bins (98.5% at 256K–512K, 98.1% at 512K–1M) — best-in-tier measured long-context performance.
- **Multimodal: 85/100.** Text/image/video input confirmed (artificialanalysis.ai) plus PDF per Zen listing, with a strong Design Arena Elo (1365); capped modestly by absent third-party MMMU/CharXiv/LVBench rows and text-only output.
- **Coding: 90/100.** DeepSWE 75.4%, AA Coding Index 75.8, SciCode ~59% and SWE-Atlas QnA 59.4% are near-frontier; capped by CursorBench 41.6% and missing SWE-bench Verified / LiveCodeBench rows.
- **Cost efficiency: 100/100.** $0 on the [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) (training-data consent trade-off); even on paid Standard pricing, 1.3 (xhigh) is the cheapest per task ($0.55) of any 59+ Index model.
- **Overall Score: 91/100.** Mean of the five quality dims (90+90+100+85+90)/5 = 91.0 → 91. Best fit: long-horizon agentic coding at zero cost when data-sharing consent is acceptable.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (artificialanalysis.ai article, benchlm.ai scorecard, llm-stats.com, dev.meta.ai, felloai.com, layer3labs.io); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: added the max/xhigh variant split (AA Index 61/62, TB 2.1 85/86%, GDPval-AA v2 1709/1754 Elo, $0.55/task, video input confirmed); fixed AA Briefcase 1597→1587 Elo; added AutomationBench 49.4%, GDP.pdf 26.6%, AA ITBench 33.2%, aaTerminalBench21 84.3%, AA TB 4.0 33.3%, CursorBench 41.6%, AA-Omniscience Index 25.0%; removed unverifiable Contributor $0.10/$0.20 price; raised Reasoning 85→90, Context window 95→100, Multimodal 80→85, Coding 84→90; Overall 87→91.
- Future sources: add a new file next to this one using the same headings.
