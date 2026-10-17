# MiniMax M3 — findings by GPT 6.1 Sol

- Source: MiniMax / `MiniMax-M3`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** MiniMax M3
- **Short description:** Open-weight native image/video model emphasizing long-context coding and cowork. Exact current public measurements differ substantially from frontier-equivalence marketing [S1–S3].
- **Provider / access:** MiniMax API/Agent/Code, self-hosting Transformers/vLLM/SGLang and gateways. Primary example uses `https://api.minimax.io/v1/text/chatcompletion_v2`; OpenCode compatible Chat Completions route listed [S1,S2,S4].
- **Release / knowledge:** Vals May31,2026 and June2 evaluation; exact cutoff unverified. Current product assets reference later dates, not a verified new snapshot [S3].
- **IDs:** `MiniMax-M3`, HF `MiniMaxAI/MiniMax-M3`, gateway `minimax-m3`; no verified Free ID [S1,S2,S4].
- **Context window:** Primary up to1M, product states guaranteed minimum512K; open card1M, Vals512,000 output configuration. Capacity depends serving surface, not assumed every request guarantees full1M [S1–S3].
- **Modalities:** Native text/image/video input, text output; thinking enabled/adaptive/disabled modes; tool-agent workflows [S1,S2]. Audio not verified.
- **Pricing (as of 2026-10-16):** Gateway$0.30 input/$0.06 cache/$1.20 output per million. Vals profile$0.60/$2.40 is a different provider/rate snapshot; neither generalized to every host [S3,S4].
- **Architecture:**~428B total/~23B active MoE, MiniMax Sparse Attention, custom MiniMax Community licence metadata, not MIT/Apache [S1]. Exact licence conditions not read, no unrestricted-use claim. Sparse-attention9×prefill/15×decode versusM2 at1M is vendor architectural comparison, not every deployment speed [S1].

### Raw benchmarks found
Agent / tool use:
- Primary BrowseComp **83.5%**, PostTrainBench **37.1** with model-training workflow, task-specific [S2].
- Vals temp1/top_p0.95/512K default: TB4 **1.01% ±1.01**, financev2 **48.27% ±0.44**, SkillsBench **51.50% ±4.50**, legal-agent **4.17% ±1.65**, legal research **29.81% ±3.18** [S3]. Historical TB2.1 **53.56%** distinct from TB4. Tau3/Tau2/GDPval/Claw/MCP exact numeric results not verified.
Reasoning / knowledge:
- Vals GPQA **92.68% ±1.44**, MMLU Pro **84.22% ±0.36**, ProofBench **18% ±3.86**, current Vals Index **36.53% ±1.17 (#43/49)** [S3]. Historical June Index58.94% is another snapshot, not directly comparable. HLE/CritPt/AA Index/LCR/MLCR/Omniscience not verified.
Coding:
- Vals SWE **75% ±1.94**, LiveCode **82.15% ±1.05**, Vibe1.1 **47.57% ±5.44**, Vibe1–100 **9.22% ±2.86**, migration **19.93% ±3.94**, multimodal SWE **33.33% ±2.15** [S3]. Exact SWE-Pro/DeepSWE/SciCode not verified.
- Vendor24hour kernel optimization **9.4× speedup/147iterations/1959tool calls** is one demonstration, not mean SWE success [S2].
Long context / multimodal:
- Primary1M capability/MSA, no exact MRCR/RULER retrieval percentage found [S1,S2]. Vals MMMU **81.16% ±0.94** [S3]. Native multimodal training confirms image/video inputs, not media generation.

### Evidence comparison and research trail
Three fresh Google queries: `"MiniMax M3" official model`, `"MiniMax M3" independent benchmarks`, `"MiniMax M3" review pricing limitations`; all interstitials. Direct primary upstream README/product and independent Vals read; gateway catalog directly inspected this session [S4]. Product says weights coming soon while upstream weights/configuration/deployment card exists: retained as dated/static-page inconsistency rather than treating model as unreleased. Main product benchmark image not assumed extracted. Vals **$3.082/index test /38m55s** reflects its rates/suite, not universal gateway economics. StrongGPQA contrasts with lowProof18/TB4~1/migration20, constraining broad “frontier” claims. Long video/context marketing doesn't prove full-window retrieval. Current gateway rates differ2× from Vals; cost scored gateway, not self-host free inference.

### Normalized scores (1–100)
- **Tool use: 80/100.** Useful finance/skills/browsing, capped by modern terminal/legal failures [S2,S3].
- **Reasoning: 83/100.** StrongGPQA but lowProof and current-index weaknesses prevent broad frontier credit [S3].
- **Context window: 95/100.** Primary1M supported,512K minimum caveat retained, no perfect-retrieval bonus [S1,S2].
- **Multimodal: 88/100.** Native image/video and visual benchmarks, no audio/media output [S1,S3].
- **Coding: 80/100.** Useful conventional SWE/LiveCode, capped by app/migration/modern-terminal weaknesses [S3].
- **Cost efficiency: 94/100.** Cheap gateway$0.30/$1.20 with caching; rate/host/task variability remains [S3,S4].
- **Overall Score: 85/100.** (80 +83 +95 +88 +80)/5=85.2 →85. Best fit low-cost supervised multimodal workers with tested context limits; cost excluded.

### Sources
- [S1] https://huggingface.co/MiniMaxAI/MiniMax-M3/raw/main/README.md — primary architecture/licence metadata/modalities/deployment.
- [S2] https://www.minimax.io/models/text/m3 — primary product, capacity qualification and task demonstrations.
- [S3] https://www.vals.ai/models/minimax_MiniMax-M3 — independent current and dated June results/settings.
- [S4] https://opencode.ai/docs/zen — directly inspected paid gateway rates/routes.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three searches and direct primary/evaluator comparison; static-page, rate and benchmark-snapshot differences explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
