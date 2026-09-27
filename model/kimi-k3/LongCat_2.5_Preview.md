# Kimi K3 — findings by LongCat 2.5 Preview

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-weight flagship — a 2.8T-parameter Latent-MoE model with native vision and a 1M-token context, built for long-horizon coding, knowledge work, and reasoning at frontier level.
- **Provider / access:** Kimi API — `kimi-k3` (OpenAI/Anthropic-compatible; `reasoning_effort` low/high/max, default max, always reasons). Also Alibaba Cloud Model Studio, Amazon Bedrock (GA 2026-09-18), and self-hostable weights. Launch 2026-07-16.
- **Release / knowledge:** Launched 2026-07-16; knowledge cutoff not formally published.
- **IDs:** `moonshot/kimi-k3` (API), `moonshotai/Kimi-K3` (HuggingFace). No Zen Free ID — paid API / open weights.
- **Context window:** 1,048,576 tokens (verified via HF model card + Kimi API docs); max output not uniformly documented (Alibaba Cloud lists 1M).
- **Modalities:** Text and image in (native vision; HF also lists video understanding); text out; reasoning yes (always on); tool calls, JSON mode, structured outputs, context caching, web search.
- **Pricing (as of 2026-09-27):** $3.00/M in (cache hit $0.30), $15.00/M out (Kimi API). Open weights under the Kimi K3 License.
- **Architecture:** 2.8T total params; Latent MoE — 896 experts, 16 active + 2 shared; KDA (Kimi Delta Attention) + Gated MLA; SiTU-GLU; 160K vocab; open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot eval table, max effort); Vals TB2.1: **80.9%**
- Terminal-Bench 2.0: **88.3%**
- BrowseComp: **91.2%**; DeepSearchQA (F1): **95.0%**
- MCP Atlas: **84.2%**; Toolathlon-Verified: **73.2%**; DECK-Bench: **73.5%**
- AutomationBench: **30.8%**; JobBench: **52.9%**; APEX-Agents: **37.6%**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (rank 8, llm-stats)
- HLE: **56%** (BenchLM; Moonshot's HLE-Full table reports 43.5% under a different harness)
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench (Vals): **93.4%**
- DeepSWE: **67.5%** (Kimi Code harness; 67.3% mini-SWE-agent on the official leaderboard)
- FrontierSWE: **81.2%**; FrontierSWE v2: **25.9%**
- ProgramBench: **77.8%**; cursorBench32: **60.8%**; LiveCodeBench (Vals): **87.2%**
- SWE Marathon: **42%**; Kimi Code Bench v2: **72.9%**; VulcanBench v3: **73.7%**
- SWE-bench Verified: no verified public score found

Long context:

- Full-1M-token context evaluation (no context management): **90.4** (HF model card; benchmark unnamed in source excerpt); no MRCR/RULER absolute score published for this exact model ID.

Multimodal extras:

- CharXiv: **91.3%**; MMMU-Pro: **81.6%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 88.3% meets the 88%+ frontier reference; BrowseComp 91.2%, DeepSearchQA 95.0% and MCP Atlas 84.2% are all frontier-tier; AutomationBench 30.8% is the only drag.
- **Reasoning: 88/100.** GPQA 93.5% and HLE 56% clear the frontier bars; no AA Intelligence Index or MRCR number to confirm the top band.
- **Context window: 95/100.** 1M tokens earns the ≥1M tier; the full-1M eval (90.4) hints at strong long-context behavior but is not a confirmed 512K+ retrieval result.
- **Multimodal: 80/100.** Native text/image (per HF also video) input lands in the 75–90 band; text-only output caps it there.
- **Coding: 88/100.** SWE-bench (Vals) 93.4%, TB2.1 88.3% and FrontierSWE 81.2% are strong; DeepSWE 67.5% and FrontierSWE v2 25.9% hold it just under 90.
- **Cost efficiency: 60/100.** $3.00/$15.00 API pricing matches the methodology's $3/$15 ≈ 60 reference point; open weights can self-host at zero marginal cost.
- **Overall Score: 88/100.** Mean of the five quality dims (90+88+95+80+88)/5 = 88.2 → 88. Best-fit: open-weight frontier pick for long-horizon coding and agentic search — near-Claude/GPT capability with self-host optionality.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Moonshot/HF model cards, Kimi API docs, llm-stats, BenchLM, Vals.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
