# DeepSeek V4 Pro — findings by Kimi K3

- Source: DeepSeek / DeepSeek V4 Pro (`deepseek-v4-pro`; open weights `deepseek-ai/DeepSeek-V4-Pro`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's V4-generation Pro reasoning model — an elite math/competitive-programming performer (Codeforces 3206, LiveCodeBench Pass@1-CoT 93.5%) with strong agentic tool use and verified 1M-context retrieval (MRCR 1M 83.5%).
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`, OpenAI-compatible); **open weights `deepseek-ai/DeepSeek-V4-Pro`** (HF link confirmed live on OpenCode Data — CORRECTION vs my first pass, which called it proprietary); OpenCode Zen route live (~#14 by weekly tokens).
- **Release / knowledge:** Released 2026-04-24 (OpenCode Data catalog — CORRECTION: my first pass inferred "0813 → 2026-08-13" from a variant code; the catalog's date governs); knowledge cutoff 2025-05 (OpenCode Data).
- **IDs:** `deepseek/deepseek-v4-pro` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (OpenCode Data; benchlm.ai); max output **384K** (OpenCode Data — previously unverified).
- **Modalities:** **text-only** in/out per the OpenCode Data catalog (confirms first pass's text-first reading); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $1.74/M input, $3.48/M output, $0.20/M cached (OpenCode Data catalog — verified now); open weights → free self-host.
- **Architecture:** open weights (OpenCode Data; HF link live); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **67.9%** (official HF card via OpenCode Data; matches benchlm.ai TB 2.0); TB 2.1: **87.9%** (benchlm.ai; Vals 54.7% — large harness divergence)
- τ²-bench (Tau2-Bench): **96.2%** (benchlm.ai)
- GDPval-AA: **1554 Elo** (official HF card via OpenCode Data — CONFLICT: benchlm.ai listed 1306 / 54.5% normalized; official governs)
- MCP Atlas: **73.6%** (official; matches benchlm.ai); Toolathlon: **51.8%** pass@1 (official HF card — benchlm.ai's "Toolathlon-Verified 74.1%" used a different variant; both retained)
- CyberGym: **83.3%**; BrowseComp: **83.4%** (official HF card; BrowseComp matches benchlm.ai)
- AA Agentic Index: **49.6%**; APEX-Agents-AA: **24.3%**; EnterpriseOps-Gym: **49.6%** (benchlm.ai)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** pass@1 (official HF card; AA 92.8%; Vals 92.4%)
- HLE: **37.7%** and **48.2%** across tool settings (official HF card; benchlm.ai listed 42.7% / 60.0% w/ tools); AA-HLE 41.0%
- AA-LCR: **80.3%**; CritPt: **18.0%** (benchlm.ai); MRCR (MMR): **83.5%** (official HF card; matches benchlm.ai MRCR-1M); CorpusQA: **62.0%** accuracy (official; matches benchlm.ai CorpusQA-1M)
- ARC-AGI-1: **90.0%**; ARC-AGI-2: **61.3%** (benchlm.ai)
- HMMT: **95.2%**; IMOAnswerBench: **89.8%**; MathArena Apex: **38.3%** / Shortlist **90.2%**; MMLU-Pro: **87.5%** EM; SimpleQA-Verified: **57.9%**; Chinese SimpleQA: **84.4%** (official HF card via OpenCode Data)
- Artificial Analysis Intelligence Index: **53.2**; BenchLM overall **63.48/100, #33 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **49.1% / 94.1%** — severe hallucination (benchlm.ai)

Coding:

- SWE-bench Verified: **80.6%** resolved (official HF card; matches benchlm.ai); SWE-bench Pro: **55.4%** resolved (official; matches); SWE Multilingual: **76.2%** (official; matches); AA coding-agents SWE-Bench Pro pass@1: **18.0%** (scaffold variant — conflict noted)
- LiveCodeBench (pass@1): **93.5%** (official HF card; matches benchlm.ai Pass@1-CoT); LiveCodeBench (Vals): **87.5%**
- Codeforces: **3206** (official; matches benchlm.ai)
- AA Coding Agent Index: **50.1**; SWE-Atlas Codebase QnA: **67.8** pass@1 (artificialanalysis.ai coding-agents — new this pass)
- DeepSWE: **62.7%**; NL2Repo: **61.5%**; DSBench-FullStack: **71.1%**; AA-SciCode: **51.0%**; AA Coding Index: **68.8** (benchlm.ai)

Long context:

- MRCR 1M: **83.5%** (MMR); CorpusQA 1M: **62.0%** — verified retrieval at the full 1M window (official HF card).

Multimodal:

- Text-only per catalog; Design Arena Website: **1258 Elo** (benchlm.ai) is the only grounded adjacent row.

### Normalized scores (1–100)

- **Tool use: 85/100.** Unchanged: τ²-bench 96.2%, TB 2.1 87.9%, CyberGym 83.3%, MCP Atlas 73.6% (official-confirmed); capped by Vals TB divergence and Agentic Index 49.6%.
- **Reasoning: 84/100.** Unchanged: HMMT 95.2%, GPQA ~90–92%, ARC-AGI-2 61.3%, AA Index 53.2; capped hard by 94.1% hallucination and the HLE spread (37.7–60%).
- **Context window: 90/100.** Unchanged: 1M window with measured MRCR 83.5% and CorpusQA 62.0% — rare verified max-window retrieval; 384K output now catalog-verified.
- **Multimodal: 20/100.** Unchanged: confirmed text-only (catalog input modalities = text); Design Arena row keeps it above the 15 floor.
- **Coding: 84/100.** Unchanged: Codeforces 3206, LiveCodeBench 93.5%, SWE-bench Verified 80.6% (all official-confirmed); capped by SWE-bench Pro scaffold spread (55.4% resolve vs 18% pass@1) and SciCode 51%.
- **Cost efficiency: 84/100.** Raised from provisional 80: verified $1.74/$3.48 ($0.20 cached) plus open-weights self-hosting — strong value for a math/elite-coding flagship.
- **Overall Score: 73/100.** Mean of the five quality dims (85+84+90+20+84)/5 = 72.6 → 73 (unchanged). Best fit: 1M-context math/competitive-coding and agent pipelines that are text-only.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official DeepSeek HF model card `deepseek-ai/DeepSeek-V4-Pro` transcribed by OpenCode Data `deepseek/deepseek-v4-pro` incl. usage/pricing/modalities; AA coding-agents rows; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: **corrected the release date (2026-04-24, not "0813/2026-08-13") and ownership (open weights, not proprietary)**; added official knowledge/math rows + AA coding-agent rows; flagged the GDPval and Toolathlon variant conflicts. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
