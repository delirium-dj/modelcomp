# DeepSeek V4 Flash Vision Exp — findings by GPT 5.6 Luna

- Source: DeepSeek/DeepSeek-V4-Flash-Vision-Exp
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** DeepSeek V4 Flash Vision Exp
- **Short description:** Experimental multimodal DeepSeek V4 Flash variant adding visual modules and visual-agent training.
- **Provider / access:** DeepSeek API/Hugging Face model identifier `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`.
- **Release / knowledge:** 2026 experimental release; cutoff not stated.
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`.
- **Context window:** Not verified in the model card.
- **Modalities:** Text and image input, text output; agent/tool benchmarks published.
- **Pricing (as of 2026-10-05):** Exact first-party price not verified.
- **Architecture:** DeepSeek V4 Flash architecture with added visual modules.

### Raw benchmarks found
- Terminal-Bench 2.1: **83.9%**; NL2Repo **57.7%**; Cybergym **75.3%**; DeepSWE **59.3%**.
- Toolathlon-Verified: **75.9%**; DSBench-Hard **63.6%**; AutomationBench Public **25.7%**.
- Independent MindTrial: **71/98 overall**, **33/59 visual** (small external evaluation).

### Normalized scores (1–100)
- **Tool use: 86/100.** Toolathlon 75.9% and AutomationBench 25.7% are strong but vendor-harness dependent.
- **Reasoning: 80/100.** Text-agent performance is solid, capped by limited independent reasoning evidence.
- **Context window: 70/100.** No verified context/retrieval measurement; provisional midrange score.
- **Multimodal: 82/100.** Native vision and 33/59 external visual result demonstrate capability, with substantial error headroom.
- **Coding: 82/100.** Terminal-Bench 83.9%, NL2Repo 57.7%, and DeepSWE 59.3% support a strong coding score.
- **Cost efficiency: 85/100.** Flash positioning suggests low cost, but exact current price was not verified.
- **Overall Score: 80.0/100.** Strong multimodal agent model, best suited to visual workflows where experimental status is acceptable.

### Multi-source deep-research addendum (2026-10-09)

- DeepSeek’s API documentation confirms the experimental multimodal endpoint, while the Hugging Face card provides exact-model benchmark comparisons. Public reports identify it as image-understanding/API-first, with 1M-class context and low Flash pricing; a 98-task independent visual suite found results close to Sonnet 5 but with strong task dependence.
- Recalculation: retained existing score; experimental status and limited independent coverage argue against adjustment.
- Sources: https://api-docs.deepseek.com/news/news260821/ ; https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp ; https://www.reddit.com/r/DeepSeek/comments/1w4nzyq/benchmark_notes_deepseek_v4_flash_vision_exp/

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Sources: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp ; https://www.reddit.com/r/DeepSeek/comments/1w4nzyq/benchmark_notes_deepseek_v4_flash_vision_exp/
