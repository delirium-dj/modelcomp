# MiMo V2.6 Flash — findings by GLM 5.3

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash (open-weights checkpoint `MiMo-V2.6-Flash-RL`)
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse-MoE efficiency checkpoint (309B total / 15B active), built on the "You Only RL Once" mixed-RL recipe; tuned for long-horizon agentic coding and tool use at mid-tier pricing. The efficiency-balanced sibling of MiMo V2.6 Pro.
- **Provider / access:** Xiaomi MiMo Open Platform API (`https://platform.xiaomimimo.com`, OpenAI-compatible), OpenRouter, and self-host (SGLang/vLLM recipes in the official model card). Chat Completions API; reasoning + tool-call parsers (`mimo`) built into serving recipes.
- **Release / knowledge:** 2026-09-21 (per Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Flash-RL` (Hugging Face); `xiaomi/mimo-v2.6-flash` (site slug ID). No Zen Free ID for this slug — the Zen free tier lives in `mimo-v2.6-free/`.
- **Context window:** 1M tokens total (official model card architecture table: "Max Context Length 1M"; AA lists 1.0M). Max output split not published.
- **Modalities:** text / image / video / audio in, text out (native omnimodal: 681M MiMo ViT vision encoder + 308M AudioTokenizer + 127M audio patch encoder per official card); reasoning yes; tool calls yes; JSON mode not documented.
- **Pricing (as of 2026-09-28):** $0.14 in / $0.28 out per 1M (Xiaomi API); cache hit $0.0028 (98% discount); ~$0.06 per AA Intelligence-Index task. Paid only for this slug.
- **Architecture:** Sparse MoE, 309B total / 15B active (256 routed experts / 8 activated, 48 layers: 39 SWA + 9 global attention), 5-layer MTP speculative decoder; open weights, MIT license.

### Raw benchmarks found

> Measured numbers with (source, harness) for traceability. Vendor = Xiaomi official HF model card (Sept 2026); AA = Artificial Analysis independent measurement (via BenchLM display, updated 2026-09-28).

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (Xiaomi HF card + HF eval-results; AA/BenchLM concur)
- Terminal-Bench 4.0: **28.8%** (Xiaomi HF card; AA-measured 28.8%)
- Toolathlon-Verified: **73.6%** (Xiaomi HF card + HF eval-results)
- AutomationBench v1.0.6: **52.3%** (Xiaomi HF card)
- OSWorld-Verified: **80.8%** (Xiaomi HF card)
- JobBench: **61.2%** (Xiaomi HF card)
- Agents' Last Exam: **27.6%** (Xiaomi HF card)
- GDPval-AA: **55.0% normalized** (AA-measured; vendor reported no Flash Elo — Pro = 1673)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- CyberGym: **95.1%** / ExploitGym: **6.0%** (Xiaomi HF card, cybersecurity harnesses)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **35.1%** (AA via BenchLM)
- LCR: **74.3%** (AA via BenchLM)
- CritPt: **12.0%** (AA via BenchLM)
- Artificial Analysis Intelligence Index: **38** (#8/116 in large open-weights class; median 18) (AA; BenchLM lists 37.9)
- Omniscience Accuracy / Hallucination Rate: **27.0% / 54.4%** (Index -12.7) (AA via BenchLM)

Coding:

- DeepSWE v1.1: **67.9%** (Xiaomi HF card + HF eval-results leaderboard; Pro 71.9, Claude Opus 5 74.0 for reference)
- MiMo Code Bench: **61.2%** (Xiaomi HF card)
- ProgramBench: **26.0%** (Xiaomi HF card)
- SciCode / AA-SciCode: **51.3%** (AA via BenchLM)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- No public MRCR / RULER / GraphWalks number at 1M reported. Closest proxy: AA-LCR **74.3%** (long-context reasoning). 1M limit verified architecturally (official card), retrieval quality at window length unverified.

### Normalized scores (1–100)

- **Tool use: 83/100.** Near-frontier agentic breadth — TB2.1 87.6%, OSWorld-Verified 80.8%, Toolathlon-V 73.6%, AutomationBench 52.3% (above Claude Opus 5's 50.3%) — capped by weak TB4.0 (28.8%) and Agents' Last Exam (27.6%), and no Tau3/Claw data.
- **Reasoning: 68/100.** HLE 35.1% and LCR 74.3% are solid and AA Index 38 doubles the open-weights median (18), but CritPt 12.0%, a 54.4% hallucination rate (Omniscience Index -12.7) and missing GPQA keep it well below frontier.
- **Context window: 95/100.** Native 1M (≥1M tier) per official architecture table and AA; no public ≥512K retrieval benchmark (MRCR/RULER) to justify the full 100.
- **Multimodal: 90/100.** Native omnimodal input (text/image/video/audio, dedicated ViT + audio encoders) with measured MMMU-Pro 73.1% and MiMo VisualCoding 71.5%; capped by text-only output and AA's API-level verification covering text+image only.
- **Coding: 78/100.** DeepSWE 67.9% is near-frontier (Pro 71.9 / Opus 5 74.0), TB2.1 87.6% and SciCode 51.3% strong for the class; capped by ProgramBench 26.0% and no verified SWE-bench Verified / LiveCodeBench numbers.
- **Cost efficiency: 95/100.** $0.14/$0.28 per 1M with 98% cache discount and ~$0.06/task (AA #6/116 on cost) is near the ~$0.10/$0.20 band; verbosity (240M output tokens on the Index, ~71% above median) inflates effective per-task cost slightly.
- **Overall Score: 83/100.** (83 + 68 + 95 + 90 + 78) / 5 = 82.8 → 83. Best-fit recommendation: strong mid-tier omni pick for long-horizon agentic coding and OS/computer-use automation at very low cost; use Pro or a frontier model for the hardest reasoning and exploit-grade tasks.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-09-28
- Method: public internet research (Xiaomi official HF model card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
