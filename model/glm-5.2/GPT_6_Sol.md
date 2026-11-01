# GLM-5.2 — findings by GPT 6 Sol

- Source: Z.ai (`glm-5.2`; `zai-org/GLM-5.2`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2.
- **Short description:** Z.ai's large open-weight text model optimized for long-horizon engineering and tool-driven coding. `max` and other thinking-effort modes are configurations of the **same** checkpoint, not separate models ([Z.ai card](https://huggingface.co/zai-org/GLM-5.2)).
- **Provider / access:** Z.ai Chat Completions `glm-5.2` at `https://api.z.ai/api/paas/v4/chat/completions`; MIT weights `zai-org/GLM-5.2` for local inference. [Z.ai docs](https://docs.z.ai/guides/llm/glm-5.2) still describe the endpoint; [Artificial Analysis](https://artificialanalysis.ai/models/glm-5-2) calls its **evaluation** deprecated after GLM-5.3, not proof that the API has been shut down.
- **Release / knowledge:** June 2026 (vendor weights available June 16); precise training cutoff not published in reviewed sources ([weights catalog](https://huggingface.co/zai-org/GLM-5.2), [Artificial Analysis profile](https://artificialanalysis.ai/models/glm-5-2)).
- **IDs:** `z-ai/glm-5.2` API routing where supported; `zai-org/GLM-5.2` official checkpoint. No distinct `glm-5.2-max` weights or verified Free ID.
- **Context window:** 1M total, up to 128K output on Z.ai's [model API page](https://docs.z.ai/guides/llm/glm-5.2); [Vals](https://www.vals.ai/models/zai_glm-5.2) reports a configured maximum 131,072 output tokens in its evaluation. Host settings can differ.
- **Modalities:** **Text in, text out only**; thinking, function calling, MCP-backed tools and structured output on the [Z.ai API](https://docs.z.ai/guides/llm/glm-5.2). Its ability to generate video-editing *code* is not native video input or generation.
- **Pricing (as of 2026-11-01):** [Artificial Analysis](https://artificialanalysis.ai/models/glm-5-2) and [Vals](https://www.vals.ai/models/zai_glm-5.2) list **$1.40 input / $4.40 output per million tokens**, AA snapshot cache discount 81%; verify live Z.ai plan and long-context tariffs. MIT weights do not remove substantial hosting cost.
- **Architecture:** MIT open-weight **753B total / approximately 40B active** MoE ([Artificial Analysis](https://artificialanalysis.ai/models/glm-5-2)), with IndexShare sparse attention and MTP speculative decoding ([official model card](https://huggingface.co/zai-org/GLM-5.2)).

### Raw benchmarks found

- **Agent / tool use:** Z.ai [Terminal-Bench 2.1 **81.0%** Terminus-2 and **82.7%** best reported harness, MCP-Atlas public set **76.8%**, Tool-Decathlon **48.2%**](https://huggingface.co/zai-org/GLM-5.2/raw/main/README.md). Independent [Vals Terminal-Bench 2.1 **67.79% ±0.99**](https://www.vals.ai/models/zai_glm-5.2) differs markedly despite the same benchmark version; do not erase harness, prompt and budget differences. Source-linked [AA τ² **99.1%**, GDPval-AA **43.6%**](https://benchlm.ai/models/glm-5-2) measure still different tasks.
- **Reasoning:** Vendor [GPQA Diamond **91.2%**, HLE no tools **40.5%**, CritPt **20.9%**](https://huggingface.co/zai-org/GLM-5.2/raw/main/README.md); [AA-GPQA **89.5%** and AA-HLE **41.1%**](https://benchlm.ai/models/glm-5-2). [Vals GPQA **85.61% ±1.77**](https://www.vals.ai/models/zai_glm-5.2) provides another independent, differently configured comparison.
- **Coding:** Vendor [SWE-bench Pro **62.1%** with OpenHands tailored prompt, NL2Repo **48.9%**, DeepSWE **46.2%**](https://huggingface.co/zai-org/GLM-5.2/raw/main/README.md). [Vals SWE-bench **82.80% ±1.69**, LiveCodeBench **69.50% ±1.18**, Vibe Code Bench v1.1 **63.96% ±4.79**](https://www.vals.ai/models/zai_glm-5.2); these are different suites, not independent confirmation of the vendor's SWE-Pro percentage.
- **Long context:** [AA-LCR **78.3%**](https://benchlm.ai/models/glm-5-2) and vendor 1M maximum; no independently verified retrieval *at 1M* located. Z.ai's long-horizon claims and 1M architecture do not establish lossless retrieval on all tasks.
- **Multimodal:** No verified vision, audio or video input on this exact text-only checkpoint ([Z.ai model page](https://docs.z.ai/guides/llm/glm-5.2)).

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong vendor MCP/terminal and independent τ², capped by a 13-point vendor–Vals terminal discrepancy.
- **Reasoning: 86/100.** GPQA ~86–91 and HLE ~41 across distinct evaluators; no guarantee outside measured protocols.
- **Context window: 90/100.** 1M advertised and AA-LCR 78.3, with no independent near-limit retrieval curve.
- **Multimodal: 15/100.** Text-only input/output, regardless of code-generated media artifacts.
- **Coding: 82/100.** SWE-Pro 62.1, Vals SWE 82.8 and full-app 63.96 show substantial code ability with differing harnesses.
- **Cost efficiency: 76/100.** Open weights and optional hosting offset a relatively costly $1.40/$4.40 API and 753B memory footprint.
- **Overall Score: 71/100.** Half-up mean (80 + 86 + 90 + 15 + 82) / 5 = 70.6; strong long-context text coding agent, not a multimodal model.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three independent model/full-text/dataset searches; exact checkpoint and API documentation reconciled with vendor methodology, independent Vals runs and source-linked AA records. Scores are normalized judgments.
- Reference URLs:
  - [Z.ai GLM-5.2 official card, benchmark table and methods](https://huggingface.co/zai-org/GLM-5.2)
  - [Z.ai exact-model API specification](https://docs.z.ai/guides/llm/glm-5.2)
  - [Vals exact-model independent benchmark suite](https://www.vals.ai/models/zai_glm-5.2)
  - [BenchLM source-linked GLM-5.2 historical results](https://benchlm.ai/models/glm-5-2)
  - [Artificial Analysis price, model size and evaluation status](https://artificialanalysis.ai/models/glm-5-2)
- Future sources: add a new file next to this one using the same headings.
