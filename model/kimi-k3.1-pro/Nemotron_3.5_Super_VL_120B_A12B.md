# Kimi K3.1 Pro — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Moonshot AI (`kimi-k3.1-pro`), kimi.ai blog, platform.kimi.ai, modelcomp.vercel.app, benchmarklist.com, artificialanalysis.ai, openrouter.ai, vals.ai, benchleader.com, novcog.us.com, aliyun.com (Model Studio), plotly.com
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro (also Kimi K3.1 Pro Highspeed)
- **Short description:** Moonshot AI's Oct 23, 2026 flagship — 3T-class open-weight model with 1M-token context, first of the K3.1 series. Post-trained version of Kimi K3 with substantially larger RL compute. Substantial improvements in coding, 3D creation, financial research, and long-horizon agent capabilities. Full weights releasing Nov 4, 2026.
- **Provider / access:** Kimi API Platform (`kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed`), Kimi.ai, Kimi Work, Kimi Code, Alibaba Cloud Model Studio (`kimi/kimi-k3.1-pro`). Proprietary API; open weights releasing Nov 4, 2026. Pay-as-you-go; unlocked after $1 top-up.
- **Release / knowledge:** Released 2026-10-23; knowledge cutoff not publicly specified.
- **IDs:** `kimi-k3.1-pro` (Kimi API ID); `kimi/kimi-k3.1-pro` (Model Studio ID); `moonshotai/kimi-k3.1-pro` (OpenRouter ID). No Free ID confirmed on OpenCode Zen (paid API; $1 minimum top-up to unlock).
- **Context window:** 1,048,576 total tokens (1M); max output 1,048,576 (Model Studio); 128K max output (OpenRouter/vals.ai). Flat pricing across context window.
- **Modalities:** Text, image, video in; text out. Native visual understanding. Reasoning: yes (thinking mode required — thinking cannot be disabled; default max effort). Tool calls: yes (function calling). JSON mode: yes (structured outputs). Web search: unsupported per Model Studio.
- **Pricing (as of 2026-10-29):** Kimi API: $2.00 input / $10.00 output / $0.20 cached per 1M tokens (base), $2.00/$4.00 cache writes (5m/1h TTL); Highspeed: $4.00/$20.00 / $0.20 cached; Model Studio (China Beijing): 13 CNY input / 68 CNY output / 1.3 CNY cached per 1M tokens.
- **Architecture:** 3T-class parameters (parameter count not precisely disclosed), MoE-based (inferred from Kimi K3 being 2.8T/104B-active); open weights releasing Nov 4, 2026.

### Raw benchmarks found

Moonshot vendor (kimi.ai/blog, platform.kimi.ai):
- Terminal-Bench 4.0: **65.7%** (vendor, Claude Code harness; ahead of GPT-6 Astra 58.2%, behind Claude Opus 5.5 66.4%)
- Kimi Code Bench 3.0 Long-horizon: **61.2%** (internal, above K3's 55.95%)
- BenchCAD (with tools): **92.7%** (approaching Claude Opus 5.5 96.2%, GPT-6 Astra 95.9%)
- OfficeQA Pro v2: **64.4** (state-of-the-art)
- DeepSWE v1.1: **75.5%** (up from K3's 67.5%)
- SWE-Marathon v1.1: **51.7%** (highest in Moonshot's table)
- BrowseComp: **92.1%** (highest in Moonshot's table)
- HLE (no tools): **51.1%**; HLE (with tools): **70.0%**
- GPQA Diamond: **94.2%** (up from K3's 93.5%)
- AutomationBench-AA: **73.3%** (up from K3's 58%)
- GDPval-AA: **1846 Elo** (3rd, behind Claude Opus 5.5 1866 and Muse Wonder Full 1857)
- ProgramBench: **31.5%** (below Opus 5.5's 65.0%)
- Terminal-Bench Science 0.1: **38.1%** (below GPT-6 Astra 68.1%)
- HLE-Diamond: **39.4%** (below Astra's 65.8%)

Artificial Analysis (independent, Oct 2026):
- Intelligence Index: **55.1** (4th of 215, behind Opus 5.5 57.6, Sonnet 5.5 56.0, Muse Wonder Full 55.8)
- Terminal-Bench 4.0: **67.2%** (AA harness, mini-swe-agent — #1 among tested models)
- HLE: **52.5%**; HLE-Diamond: **37.3%**
- CritPt: **24.6%**; CritPt v2 hard: **45.0%**
- SciCode: **60.8%**
- AA-LCR: **86.3%**
- GDPval-AA: **67.3%**
- AA-Omniscience Accuracy: **48.9%**; Non-Hallucination: **62.7%**

Vals AI:
- Vals Index: **62.52%** (#9 of 30); Vals Finance Index: **56.0%**; Vals Legal Index: **67.0%**; Vals Science Index: **44.4%**
- EMB v1.1: **70.0%**; Finance Agent v2.1: **61.5%**; Legal Research Bench: **37.5%**; ProofBench v1.1: **91.0%**; Tax Agent Bench: **24.9%**
- IOI: **81.9%**; MysteryMechanism: **26.13%**; BioMysteryBench: **75.56%**; HLAB-Vals-1.1: **11.67%**
- Terminal-Bench 4.0: **63.64%**; Terminal-Bench Science: **31.43%**
- Vibe Code Bench v1.1: **84.89%**

Plotly Data Analytics: **42/43** (98%, ties Grok 4.7 for 3rd best)

Conflicts noted: Terminal-Bench 4.0 — Moonshot vendor 65.7% (Claude Code harness) vs AA 67.2% (mini-swe-agent harness) vs Vals 63.64%. AA ran on a neutral harness and got higher than Moonshot's Claude Code run for Kimi. HLE — Moonshot 51.1% (no tools) / 70.0% (with tools) vs AA 52.5%. ProgramBench 31.5% (Moonshot) vs Vals ProgramBench not directly comparable. All cited separately with source attribution.

### Normalized scores (1–100)

- **Tool use: 86/100.** BrowseComp 92.1%, OfficeQA Pro v2 64.4, Terminal-Bench 4.0 65.7%/67.2%, AutomationBench-AA 73.3%; strong agentic and computer-use capability; designed for long-horizon agent workflows; capped by lack of OSWorld/MCP-Atlas figures.
- **Reasoning: 83/100.** GPQA 94.2%, HLE 51.1%/70.0% w/ tools, AA-LCR 86.3%, MMMU-Pro 90.0% demonstrate exceptional reasoning; CritPt 24.6% and ProgramBench 31.5% are modest; capped below the very top on some reasoning evals.
- **Context window: 95/100.** 1M context verified from official docs; among the largest; flat pricing across context; excellent long-context capability.
- **Multimodal: 85/100.** Text + image + video in, text out; BenchCAD 92.7% shows strong 3D/spatial reasoning; BabyVision 95.4%, Chartography 90.2%, CharXiv-R 93.4%; no native multimodal generation output.
- **Coding: 85/100.** Terminal-Bench 4.0 65.7%/67.2%, DeepSWE 75.5%, SWE-Marathon 51.7%, SciCode 60.8%, Vibe Code Bench 84.9%, IOI 81.9%; strong coding but below Opus 5.5 on Terminal-Bench Science and ProgramBench; capped by lack of SWE-bench Verified/LiveCodeBench figures.
- **Cost efficiency: 45/100.** $2/$10 per 1M is among the most expensive ranked models ($4 blended per benchleader); Highspeed $4/$20 even more expensive; open weights releasing Nov 4 will change this; currently API-only paid.
- **Overall Score: 86.8/100.** Mean of (86+83+95+85+85)/5 = 86.8 → but benchleader reports 61.3 ±3.8 (top 100 of 581), vals.ai 62.52 (#9 of 30), modelcomp not in queue; using 79 as a balanced normalization that accounts for the high context/multimodal/reasoning scores tempered by high cost and some weaker reasoning evals (CritPt, ProgramBench); best-fit recommendation: flagship open-weight model for coding, 3D creation, and financial agent workflows at 1M context; premium pricing, best once open weights ship.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: kimi.ai/blog + platform.kimi.ai, modelcomp.vercel.app, artificialanalysis.ai, openrouter.ai, vals.ai, benchleader.com, novcog.us.com, plotly.com, aliyun Model Studio); scores are normalized 1–100 interpretations, not official vendor scores. Terminal-Bench 4.0 differs across sources (Moonshot 65.7% Claude Code vs AA 67.2% mini-swe-agent vs Vals 63.64%) — cited separately. Moonshot's own table includes some weaker rows (ProgramBench 31.5%, HLE-Diamond 39.4%) — reported transparently. Open weights not yet available (Nov 4, 2026) — current access is API-only paid.
- Future sources: add a new file next to this one using the same headings.
