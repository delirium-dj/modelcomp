# Qwen 3.8 Flash — findings by DeepSeek 4.1 Flash

- Source: Alibaba Qwen/Qwen3.8 Flash (`qwen3.8-flash`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's cheap high-volume Qwen 3.8 tier, released 2026-08-26. `qwen3.8-flash` is the managed QwenCloud/OpenRouter endpoint; Hugging Face describes it as the official production version **based on the open-weight Qwen3.8-Flash-Next checkpoint**, which also previews the Qwen 4 architecture (GDN + Qwen Sparse Attention hybrid, gated residuals, n-gram embeddings, Muon optimizer). Not an alias of Qwen3.8-Max — the backbone is roughly 20× smaller.
- **Provider / access:** Alibaba Cloud / Qwen API (`qwen3.8-flash`; also via Novita and other hosts) and open weights `Qwen/Qwen3.8-Flash-Next` on Hugging Face. Chat Completions compatible; `reasoning_effort` supported.
- **Release / knowledge:** 2026-08-26 (Flash-Next weights and hosted Flash). Knowledge cutoff not published on the pages checked.
- **IDs:** `qwen3.8-flash` (hosted, proprietary terms); open checkpoint `Qwen/Qwen3.8-Flash-Next` (qwen-community-1.0 licence); Zen route `opencode/qwen-3.8-flash`. No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,000,000 tokens on the hosted route (131,100 max output reported by llm-stats); the open checkpoint is 262,144 native, ~1M with YaRN.
- **Modalities:** text + image + video in → text out (llm-stats modality row; OpenLM.ai confirms a multimodal MoE). Reasoning yes; tool calls; no audio in, no non-text output.
- **Pricing (as of 2026-09-23):** $0.15 in / $0.47 out per 1M tokens, cached input $0.016 per 1M (Novita listing) — an order of magnitude under the Max tier.
- **Architecture:** sparse MoE with a 125B main network plus 51B of n-gram embeddings and a 4B multi-token-prediction head, **6B parameters active per token** (OpenLM.ai / Codersera breakdown; the "180B total" headline includes the auxiliary tables).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (one aggregator row printed 0.9% next to its own 88.3% field-leader value — a scrape artefact, not reported)
- Tau3-Banking: **45.4%** pass@1 (95th percentile, rank 10/174, BenchmarkList)
- GDPval-AA: **1743 Elo** (98th percentile, rank 8/340, BenchmarkList)
- JobBench **55.7%** (rank 7/36); Toolathlon **73.5%** (14/37); ClawEval-MM **64.4%** (5/11); Agents' Last Exam **24.3%** (16/32); AndroidWorld **84.5%** (5/21); OSWorld 2.0 **19.4%** (12/20)
- MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (BenchmarkList, checked 2026-09-22)
- HLE: **38.0%** (BenchmarkList)
- LCR / MLCR: **AA-LCR 77.0%** (rank 29/409); no MRCR/RULER row found
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index **55.8** (96th percentile, rank 18/418); Epoch Capabilities Index **148.07** (rank 13 of 398, open-weight #2)
- MathVision **90.6%**; RealWorldQA **88.5%** (rank 1/30); ERQA **72.3%**; IFBench **81.3%**; LVBench **76.6%**; CharXiv-R **84.6%**
- No AA-Omniscience or hallucination-rate figure was found for this ID.

Coding:

- SWE-bench Verified: **no verified public score found**
- SWE-bench Pro: **62.5%** resolved (BenchmarkList)
- LiveCodeBench: **91.9%** — rank 2 of 49 (BenchmarkList)
- SWE-bench Multilingual **81.0%**, SciCode **46.9%**, DeepSWE 1.1 **58.7%**, NL2Repo **48.1%**, Vision2Web **64.0%** (rank 1 of 3)
- WebDev Arena **1622.28** (92nd percentile); coding-category composite 89th percentile of the field
- Relative note (Codersera): the Flash tier trails the family flagship by about six points of SWE-bench Pro while costing roughly a tenth as much.

Long context:

- AA-LCR 77.0% is the only long-context retrieval signal; no MRCR/RULER retention figure at 512K+ was published.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA 1743 Elo is essentially at the 1750+ frontier reference, Tau3-Banking 45.4% is most of the way up the frontier band, and Toolathlon 73.5% / ClawEval-MM 64.4% / AndroidWorld 84.5% confirm breadth; capped by the missing Terminal-Bench 2.1 row and a weak OSWorld 2.0 (19.4%).
- **Reasoning: 88/100.** GPQA Diamond 92.3% clears the 90%+ frontier reference and AA Intelligence Index 55.8 is strong, but HLE 38.0% sits just under the 40% marker and no CritPt/omniscience row exists — it lands at the floor of the top band rather than inside it.
- **Context window: 95/100.** 1M hosted input (262K native, ~1M via YaRN on the open checkpoint) is the ≥1M tier; held at the floor for missing 512K retention evidence, and the 131K output cap is the practical constraint on long agent runs.
- **Multimodal: 85/100.** Text + image + video in → text out is the "+video/PDF in = 75–90" band, backed by LVBench 76.6%, CharXiv-R 84.6% and RealWorldQA 88.5%; below 90 because there is no audio input or non-text output.
- **Coding: 85/100.** LiveCodeBench 91.9% (rank 2 of 49), SWE-bench Multilingual 81.0% and SWE-bench Pro 62.5% plus DeepSWE 58.7% are strong for a Flash tier; capped by SciCode 46.9% (under the 55% frontier reference), no SWE-bench Verified row, and the ~6-point SWE-bench Pro gap to its own flagship.
- **Cost efficiency: 96/100.** $0.15 in / $0.47 out with $0.016 cached input lands in the ~$0.10/$0.20 = 97–99 zone (a hair above it on output price); paid-only, no $0 route verified.
- **Overall Score: 88/100.** (88 + 88 + 95 + 85 + 85) / 5 = 88.2 → **88**. Best fit: outstanding price-per-capability for high-volume agentic and coding work at 1M context — the value pick of this batch when per-token spend matters more than the last few benchmark points.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (llm-stats model page for specs/pricing/licence, BenchmarkList 28-benchmark table for Qwen3.8-Flash-Next, OpenLM.ai architecture notes, Codersera family breakdown, Alibaba Cloud launch post reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
