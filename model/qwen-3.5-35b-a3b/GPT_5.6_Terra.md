# Qwen3.5-35B-A3B — findings by GPT-5.6 Terra

- Source: Qwen / Qwen3.5-35B-A3B
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

Qwen publishes this as an open-weight vision-language MoE with 35B total parameters and 3B activated parameters.  It has a 262,144-token native context window, documented extension to 1,010,000 tokens, and is usable through common local serving stacks.  Qwen describes the separately hosted Qwen3.5-Flash service as the corresponding production variant with a 1M default context and built-in tools.

## Evidence review

### Vendor-reported evaluation

The official model card reports 85.3 MMLU-Pro, 84.2 GPQA Diamond, 91.9 IFEval, 69.2 SWE-bench Verified, 74.6 LiveCodeBench v6, 67.3 BFCL-V4, 81.2 TAU2-Bench, and 47.4 HLE with tools.  Its multimodal table reports 81.4 MMMU, 75.1 MMMU-Pro, 91.0 OCRBench, 86.6 VideoMME (with subtitles), 68.6 ScreenSpot Pro, and 54.5 OSWorld-Verified.  These are useful capability signals, but are vendor results and their exact prompts, agents, and inference budgets vary by benchmark.

### Independent checks and reconciliation

Selfhost Directory’s benchmark aggregation separately lists an independent MMLU-Pro result of 85.3%, GPQA Diamond 85.3%, and AIME 2026 93.3%; it labels the model-card SWE-bench, Terminal-Bench, MMMU-Pro, and ScreenSpot results as self-reported.  Noometry’s October snapshot aggregates public leaderboards and places the model around the middle of its ranked field on LMArena Coding (1410), Hard Prompts (1400), and Long Query (1390), while its WebDev rating (1254) is much weaker.  The external data therefore supports solid general reasoning and text coding, but not a frontier-level agentic or web-development score.  The source-specific differences are retained rather than averaged as directly comparable measurements.

### Raw benchmarks found

| Area | Result | Evidence |
| --- | ---: | --- |
| Reasoning | 84.2 GPQA Diamond; 22.4 HLE with CoT | Official model card |
| Coding | 69.2 SWE-bench Verified; 74.6 LiveCodeBench v6; 40.5 Terminal-Bench 2 | Official model card |
| Tool / agents | 67.3 BFCL-V4; 81.2 TAU2-Bench; 47.4 HLE with tools | Official model card |
| Vision | 81.4 MMMU; 75.1 MMMU-Pro; 91.0 OCRBench | Official model card |
| Independent comparison | 85.3 MMLU-Pro; 85.3 GPQA Diamond; 93.3 AIME 2026 | Selfhost Directory aggregation |

### Normalized scores (1–100)

- **Tool use: 76/100.** BFCL-V4 and tool-search results show useful agent capability, tempered by the more modest HLE-with-tools and visual-agent measurements.
- **Reasoning: 83/100.** Strong GPQA/MMLU-Pro and math results are corroborated by independently collected entries, with HLE keeping this below leading reasoning systems.
- **Context window: 89/100.** 262K native context and a documented 1.01M extension are excellent; the independent long-query signal does not establish equally strong long-context quality.
- **Multimodal: 87/100.** Broad vision, document, video, GUI, and tool-call coverage plus high official MMMU/OCR results support a strong score, while remaining vendor-reported.
- **Coding: 76/100.** SWE-bench and LiveCodeBench are good for a 3B-active MoE, but independent WebDev and aggregated coding placement argue against a higher score.
- **Cost efficiency: 94/100.** Open weights and only 3B activated parameters make this unusually efficient for its reported breadth; this is a value assessment, not part of Overall.
- **Overall Score: 82/100.** Mean = 82.2 from Tool use, Reasoning, Context window, Multimodal, and Coding; cost efficiency is excluded.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-11-03
- Method: Fresh public-web research; scores are normalized 1–100 interpretations, not vendor scores.
- Reference URLs:
  - https://huggingface.co/Qwen/Qwen3.5-35B-A3B
  - https://selfhost.directory/models/qwen/qwen3.5-35b-a3b
  - https://noometry.com/models/qwen3-5-35b-a3b
  - https://www.alibabacloud.com/help/en/model-studio/qwen-api-reference
