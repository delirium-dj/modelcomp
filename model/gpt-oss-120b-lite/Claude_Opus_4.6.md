# GPT-OSS 120B Lite — findings by Claude Opus 4.6

- Source: OpenAI (`gpt-oss-120b-lite`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B Lite
- **Short description:** OpenAI's Apache 2.0 open-weight 117B/5.1B-active MoE model, "Lite" variant tuned for concise, high-density reasoning with a reduced max output window (32K vs the base model's larger output). Free to self-host.
- **Provider / access:** OpenCode (`opencode/gpt-oss-120b-lite`), self-hosted via Hugging Face/GitHub. Also available on various inference providers. Chat Completions–compatible with full chain-of-thought visibility.
- **Release / knowledge:** Released 2026 (alongside gpt-oss-120b base). Knowledge cutoff not publicly specified.
- **IDs:** `opencode/gpt-oss-120b-lite`
- **Context window:** 131,072 tokens (128K) input / 32,768 tokens (32K) max output — per meta.json.
- **Modalities:** Text in; text out only. Configurable reasoning effort (low/medium/high). Function/tool calling, structured outputs, Python execution environment support.
- **Pricing (as of 2026-11-10):** Free Apache 2.0 open weights for self-hosting. Hosted providers charge ~$0.15/1M input, ~$0.60/1M output.
- **Architecture:** Sparse MoE — ~117B total parameters, ~5.1B active per token. 128 experts with top-4 routing, 36 layers. MXFP4 quantization enables single 80GB GPU deployment (H100, MI300X). Apache 2.0 license.

### Raw benchmarks found

> Note: All published benchmarks are for the base `gpt-oss-120b` model. No standalone "Lite" variant-specific benchmark scores were found. The Lite variant shares the same architecture but is tuned for concise output and has a smaller max output window (32K). Performance is expected to be comparable to the base on reasoning/knowledge tasks but may differ on generation-heavy tasks.

Agent / tool use:

- Native function/tool calling and Python execution supported (shared architecture)
- Terminal-Bench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge (gpt-oss-120b base reference scores, high effort):

- GPQA Diamond: **~80.1%** (OpenAI / cognativ.com)
- MMLU: **~90.0%** (OpenAI)
- HLE: **~19.0%** (OpenAI — modest on this frontier-hard benchmark)
- AIME 2024: **~96.6%** (OpenAI)
- AIME 2025: **~92.5–97.9%** (OpenAI, depending on source/config)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding (gpt-oss-120b base reference scores):

- SWE-bench Verified: **~62.4%** (OpenAI)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- 128K token context window confirmed. No specific MRCR/RULER/GraphWalks retrieval benchmarks found.

### Normalized scores (1–100)

- **Tool use: 50/100.** Supports function calling, structured outputs, and Python code execution natively. However, no standalone tool-use benchmark scores (Terminal-Bench, Toolathon) were found. The MoE architecture's agentic capabilities are confirmed but not independently benchmarked for the Lite variant.
- **Reasoning: 60/100.** Base gpt-oss-120b scores GPQA 80.1%, MMLU 90%, AIME 96.6% — strong reasoning for an open-weight model, approaching o4-mini class. However, HLE 19% shows limitations on frontier-hard tasks. Lite variant expected comparable. Capped by the HLE score and the discount for "Lite" tuning.
- **Context window: 65/100.** 128K input is solid, but max output limited to 32K (half of the base model). No long-context retrieval benchmarks. The output cap is a notable limitation for generation-heavy use cases.
- **Multimodal: 15/100.** Text-only model — no image, audio, or video support.
- **Coding: 55/100.** Base gpt-oss-120b SWE-bench 62.4% is respectable for open-weight. No LiveCodeBench or other coding benchmarks found. Capped by the 32K output limit potentially affecting long code generation and the absence of Lite-specific coding benchmarks.
- **Cost efficiency: 92/100.** Free Apache 2.0 weights for self-hosting. Hosted pricing ~$0.15/$0.60 per 1M is very affordable. Not quite 100 because self-hosting requires an 80GB GPU.
- **Overall Score: 49/100.** Mean of (50 + 60 + 65 + 15 + 55) / 5 = 49.0 → 49. A capable open-weight reasoning model with strong math/science benchmarks inherited from gpt-oss-120b, but held back by text-only modality, limited output window (32K), and the absence of Lite-specific benchmark data.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-10
- Method: Public internet research (OpenAI, cognativ.com, GitHub, Artificial Analysis, Hugging Face, aymo.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — gpt-oss-120b announcement](https://openai.com)
  - [cognativ.com — gpt-oss-120b benchmarks](https://cognativ.com)
  - [GitHub — gpt-oss model repository](https://github.com)
  - [Artificial Analysis — gpt-oss evaluation](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
