# Qwen3.8 Max — findings by GPT 6.1 Sol

- Source: Alibaba / `qwen3.8-max`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Hosted multimodal Max flagship based on the open-weight Qwen3.8-2.4T-A95B. The downloadable checkpoint is text-only and always-thinking; the hosted version adds vision, non-thinking mode and tools. These are not byte-identical capability specifications [S1,S2].
- **Provider / access:** Qwen Cloud compatible Chat Completions at `https://ap-southeast-1.maas.qwencloudapi.com/compatible-mode/v1`, plus Responses tools; OpenCode `opencode/qwen3.8-max` at `https://opencode.ai/inference/openai/v1/chat/completions` [S1,S6].
- **Release / knowledge:** August 3, 2026 initial Max per Vals; current AA profile explicitly measures **0902**, September 2 [S3,S4]. No verified knowledge cutoff found. August study and September API results retain their dates.
- **IDs:** Hosted `qwen3.8-max`; upstream `Qwen/Qwen3.8-2.4T-A95B`. No verified OpenCode Free ID [S1,S2,S6].
- **Context window:** Hosted **1M total**, rounded limits **991K non-thinking input /983K thinking input /131K output /262K reasoning** [S1]. AA 0902 lists **984K** context, apparently a different input/rounding convention; not silently equated to native capacity [S4]. Open checkpoint **262,144 native**, extensible **1,010,000**, not natively 1M [S2].
- **Modalities:** Hosted text/image/video input, text output; function calling, structured output, search/cache, and protocol-specific PDF parsing/tooling [S1]. Open checkpoint text-only; no native audio verified [S2].
- **Pricing (as of 2026-10-16):** Hosted $2 input/$6 output per million, implicit cache $0.25, explicit creation $2.50/read $0.17. OpenCode lists $2/$6/$0.25 read/$2.50 write; exact cache product differs [S1,S6]. No $0 tier assumed.
- **Architecture:** Upstream hybrid Gated DeltaNet/Gated Attention MoE, **2.4T total/95B active**, 92 layers [S2]. Custom Qwen3.8-Max license, not Apache/MIT: attribution requirements at large-product thresholds and separate-license conditions for qualifying large MaaS/AI-work-assistant businesses [S7]. Open weights do not imply every hosted feature is released. Effort low/medium/xhigh, xhigh default, preserve_thinking default true on upstream; host settings must be checked separately [S2,S5].

### Raw benchmarks found

Agent / tool use:

- Upstream primary table explicitly labelled Qwen3.8-Max: TB2.1 **86.6%**, Claude Code avg@10/five-hour timeout/131,072 max tokens. CoWorkBench **74.8%** internal, SkillsBench v1.1 **70.2%** (87 public tasks, three runs, OpenCode harness), AutomationBench public-subset pass@1 **27.3%**, Toolathlon-Verified **72.5%** [S2].
- Agents' Last Exam **27.0 pass /52.4 score**, distinct metrics; WideSearch **81.9 item-F1**, not pass rate [S2].
- Vals Alibaba/temp0.7/128K default: TB4 **34.34% ±3.94**, SkillsBench **42.01% ±4.43**, Finance Agent v2 **50.59% ±0.58**, legal-agent **10.42% ±2.29**, legal research **47.60% ±3.47**, cyber v1.1 **28.57% ±3.31**. Default effort not shown; overrides possible [S3].
- BenchLM older Vals TB2.1 **67.4%**, vendor-attributed OSWorld-Verified **86.1%** versus OSWorld2 **19.4%**, secondary-only [S8]. GDPval-AA Elo, Tau3/Tau2, Claw-Eval/ClawProBench and MCP-Atlas: no verified numeric result found in inspected direct text.

Reasoning / knowledge:

- Primary GPQA Diamond **92.6%**, HLE **43.6% without tools /56.2% tools**, IFBench **82.8%** [S2].
- Vals GPQA **93.69% ±1.22**, MMLU Pro **88.60% ±0.31**, ProofBench v1.1 **58% ±4.96**, current index **48.27% ±1.34, #34/48** [S3].
- AA **0902 v4.3.2 Intelligence Index 45, #33/217** [S4]. BenchLM aggregate **69.63, #19/950, 67/638 partial coverage** is not AA or repository Overall [S8].
- CritPt, MLCR, AA-LCR and Omniscience accuracy/hallucination: no verified exact hosted-model numeric results found. Secondary FrontierMath v2 **74.737% tiers 1–3 /46.341% tier 4** remains evaluator-attributed, not directly reverified [S8].

Coding:

- Primary SWE-Pro **67.7%** on refined/corrected suite, Claude Code/256K context; DeepSWE **v1.1 56.6%**, best of Claude Code and mini-SWE-agent; NL2Repo **55.9%** [S2]. These best-harness/refined-suite scores are not neutral same-harness cross-vendor tests.
- Primary FrontierSWE **73.5 dominance score**, not 73.5% task completion; PaperBench **93.0**, BasicAgent Code-Dev, judge Opus4.6, three runs/up to 12 hours. In-house ReactBench **1724 Elo** is not an independent Vibe score [S2].
- Vals SWE **85.60% ±1.57**, LiveCodeBench **87.85% ±0.95**, Vibe v1.1 **64.70% ±5.36**, Vibe 1–100 **12.83% ±3.18**, migration **23.96% ±4.31**, ProgramBench **0%**, terminal-science **12.86% ±4.03**, multimodal SWE **39.17% ±2.23** [S3]. Exact SciCode not verified.
- Independent August 4 VulcanBench v3, 23 post-cutoff PR tasks, 202 scored runs: **81.2% low /71.0% medium /55.1% xhigh** mean task pass@1; **10/20/26 unfinished runs**, **$0.75/$0.79/$1.19 per solved task**, mean **19.6/21.7/25.5 minutes**. Five additional xhigh provider read timeouts excluded, not counted as incorrect [S5]. Small-suite standard errors ±7.8–9.7 points; three attempts/task where available.

Long context / multimodal:

- Primary MRCR **v2 8-needle at 256K 92.9%**, LongBench v2 **66.3%**; not 92.9% at 1M [S2]. No ≥98% full-window retrieval verified.
- Vals MMMU Pro **88.03% ±0.78** [S3]. BenchLM vendor-attributed MMMU **82.3%**, VideoMMMU **88.7%**, Video-MME with subtitles **90.4%** remain secondary-only [S8]; hosted video is independently listed and primary documented [S1,S3].

### Evidence comparison and research trail

Three distinct fresh DuckDuckGo searches: `"Qwen3.8-Max" official model specifications`, `"Qwen3.8-Max" independent benchmarks`, `"Qwen3.8-Max" pricing review limitations`; all challenged, yielding no evidence. Both Qwen blog URLs returned only an app shell; Alibaba legacy docs returned a 404 page. Direct upstream HF README and license, Qwen Cloud exact model page, AA, Vals, BenchLM and VulcanBench were inspected; OpenCode route/pricing docs directly read during this batch [S6]. No unread blog claim is treated as directly verified.

The main identity conflict is resolved by the primary upstream card: Vals/BenchLM's “open-weight Max” describes the underlying release, whereas AA's proprietary 0902 describes the hosted model with extra capabilities. Text-only native 262K weights must not receive hosted vision or default-1M credit when self-hosting [S1–S4]. Primary table corrects secondary metric flattening: ALE 52.4 is score rather than pass rate, FrontierSWE 73.5 is recomputed dominance, and MRCR 92.9 is specifically at 256K [S2,S8]. Vals effort is unspecified, not assumed xhigh.

AA 0902 reports **38.8 tokens/s, 3.08s TTFT, 190M suite output tokens and $5.41/index task**, illustrating that moderate token rates do not guarantee low total cost [S4]. Vals **$4.964/test /101m11s** uses another suite [S3]. VulcanBench's default-xhigh inversion is driven by budget exhaustion, with provider-side 600-second request timeouts and no tested thinking_budget alternative; it measures bounded deployment behavior, not an unlimited-compute ceiling. Its August API results are not represented as a September 0902 rerun [S5]. Good GPQA and conventional coding coexist with weak full programs, migrations and cyber tasks [S3].

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong primary tools and useful independent terminal/professional results, capped by budget failures and low complete-workflow success [S2,S3,S5].
- **Reasoning: 89/100.** GPQA around 93% and HLE 43.6% support high reasoning; ProofBench 58%, current index standing and absent calibration numbers limit ceiling credit [S2–S4].
- **Context window: 95/100.** Evaluated hosted 1M total earns top capacity tier; native checkpoint 262K and 256K-only MRCR result explicitly distinguished [S1,S2].
- **Multimodal: 88/100.** Hosted image/video understanding with MMMU evidence, but no native audio/output and no released vision in upstream checkpoint [S1–S3].
- **Coding: 87/100.** Strong SWE/LiveCode and primary SWE-Pro, capped by low migration, zero ProgramBench and effort/time-budget sensitivity [S2,S3,S5].
- **Cost efficiency: 70/100.** $2/$6 with caching is moderate, but AA $5.41/task and verbose/slow traces materially constrain value [S1,S4,S5].
- **Overall Score: 89/100.** (84 + 89 + 95 + 88 + 87) / 5 = 88.6 → 89. Best fit: supervised hosted multimodal reasoning and scoped coding with measured effort/budget settings; cost excluded.

### Sources

- [S1] https://www.qwencloud.com/models/qwen3.8-max — primary hosted model, features, modes, limits and cache rates.
- [S2] https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B/raw/main/README.md — primary upstream/hosted distinction, architecture and Max-labelled benchmark table with metric/harness footnotes.
- [S3] https://www.vals.ai/models/alibaba_qwen3.8-max — independent August-labelled hosted profile and current suite.
- [S4] https://artificialanalysis.ai/models/qwen3-8-max — independent explicitly 0902 profile and current task economics.
- [S5] https://vulcanbench.com/benchmarks/12-qwen38-max.html — independent August 4 fixed-budget effort study and exclusions.
- [S6] https://opencode.ai/docs/zen — primary gateway route and paid prices.
- [S7] https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B/raw/main/LICENSE — directly inspected custom weights license.
- [S8] https://benchlm.ai/models/qwen3-8-max — secondary source-linked aggregation, updated October 15; metric simplifications qualified.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three distinct search attempts, direct primary upstream/hosted and independent evaluator inspection; license, snapshot, harness, metric and bounded-effort differences retained. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
