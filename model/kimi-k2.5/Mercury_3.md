# Kimi K2.5 — findings by Mercury 3

- Source: Moonshot AI/Kimi K2.5
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weights (Modified MIT) native multimodal agentic model (released 2026-02): 1T total/32B active MoE built via continual pretraining on ~15T mixed visual/text tokens atop Kimi-K2-Base; 256K context, image/video input, thinking + instant modes, agent-swarm execution.
- **Provider / access:** Kimi API (platform.moonshot.ai; `kimi-k2.5`), Kimi.com/Kimi Code; open weights on Hugging Face; Modified MIT license.
- **Release / knowledge:** Released 2026-02 (tech blog/arXiv 2602.02276); knowledge cutoff not published.
- **IDs:** `moonshotai/Kimi-K2.5` (HF; `kimi-k2.5` API; Thinking and Instant modes).
- **Context window:** 262,144 tokens (256K) total; max output not disclosed (32K per models.dev family block).
- **Modalities:** text + image + video input (MoonViT vision encoder, 400M), text output; reasoning (interleaved thinking); tool calls; agent swarm.
- **Pricing (as of 2026-11-03):** open weights (Modified MIT); API pricing follows the K2 family (~$0.95/$4.00 class, unverified for this exact model).
- **Architecture:** 1T total / 32B active MoE, 61 layers (1 dense), 384 experts (8 routed + 1 shared), MLA attention; Modified MIT, open weights.

### Raw benchmarks found

Agent / tool use (thinking):

- τ²-bench: **95.9%** (AA); BrowseComp: 60.6% (74.9% ctx-manage; **78.4% agent swarm**); WideSearch: 72.7% (79.0% swarm); DeepSearchQA: **77.1%**; Seal-0: 57.4%; BFCL v4: 68.3%
- Terminal-Bench 2.0: 50.8%; OSWorld-Verified: 63.3%; Claw-Eval: 52.3%; GDPval-AA: 936 (17.0%); APEX-Agents-AA: 11.5%; Toolathlon: 27.8%; MCP Atlas: 29.5%; MCP-Tasks: 59.1%; DeepPlanning: 14.4%; JobBench: 8.7%; ResearchClawBench: 14.0%

Reasoning / knowledge:

- GPQA Diamond: **87.6%** (87.37% independent); SuperGPQA: 69.2%; MMLU-Pro: 87.1%; HLE: **30.1%** (50.2% w/ tools); AIME 2025: **96.1%**; AIME 2026: 95.8%; HMMT: 95.4%/91.1%/87.1%; IMOAnswerBench: 81.8%
- AA-LCR: 70.0% (card) / 78.0% (AA); CritPt: 3.1%; AA II: 23.5; LongBench v2: 61%; AA-Omniscience: accuracy 35.2%, hallucination rate 65.7%

Coding:

- SWE-bench Verified: **76.8%** (70.8% independent re-run); SWE-bench Pro: 50.7%; SWE Multilingual: 73%; Terminal-Bench 2.0 50.8%; LiveCodeBench v6: **85.0%**; PaperBench: 63.5%; React Native Evals: 77.2%; SWE-Rebench: 58.5%; AA Coding Index: 46.8%; SciCode: 48.7%; NL2Repo: 32%; CyberGym: 41.3%

Long context:

- 256K window; AA-LCR 70–78%; LongBench v2 61%.

Multimodal:

- image/video in; MMMU 84.3%; MMMU-Pro 78.5%; MathVision 84.2%; CharXiv 77.5%; OCRBench 92.3%; OmniDocBench 1.5 88.8%; VideoMMMU 86.6%; VideoMME 87.4%/83.2%; MLVU 85.0%; MotionBench 70.4%; WorldVQA 46.3%; ZeroBench 9/11.

### Normalized scores (1–100)

- **Tool use: 78/100.** BrowseComp 78.4% (swarm), τ² 95.9%, DeepSearchQA 77.1%, BFCL 68.3% — strong search/agentic; capped by APEX 11.5%, Toolathlon 27.8%, MCP Atlas 29.5%, DeepPlanning 14.4%, and JobBench 8.7%.
- **Reasoning: 83/100.** GPQA 87.6%, AIME 96.1%, HMMT 95.4%; capped by HLE 30.1%, CritPt 3.1%, and II 23.5.
- **Context window: 72/100.** 256K (below the 1M class); LCR 70–78% moderate.
- **Multimodal: 90/100.** Image + video input with strong vision rows (VideoMMMU 86.6%, OCRBench 92.3%, OmniDocBench 88.8%); text-only output caps it.
- **Coding: 79/100.** SWE Verified 76.8%, LCB 85%, Multilingual 73%; capped by SWE Pro 50.7%, NL2Repo 32%, CyberGym 41.3%, and coding index 46.8%.
- **Cost efficiency: 80/100.** Modified MIT open weights; API at family rates (~$0.95/$4.00 class, unverified here).
- **Overall Score: 80/100.** Mean of (78+83+72+90+79)/5 = 80.4 → 80. A strong open native-multimodal agent; the 256K cap and thin agentic fringe are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Moonshot AI model card/tech report, Artificial Analysis model page/leaderboards, BenchLM aggregation, arcee/independent re-runs); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting independent SWE re-runs (76.8 vs 70.8) listed.
- Reference URLs:
  - [Kimi K2.5 model card (Hugging Face)](https://huggingface.co/moonshotai/Kimi-K2.5)
  - [Kimi K2.5 tech blog (Moonshot AI)](https://www.kimi.com/blog/kimi-k2-5.html)
  - [Kimi K2.5 technical report (arXiv 2602.02276)](https://arxiv.org/abs/2602.02276)
  - [Kimi K2.5 — BenchLM benchmark aggregation](https://benchlm.ai/models/kimi-k2-5)
