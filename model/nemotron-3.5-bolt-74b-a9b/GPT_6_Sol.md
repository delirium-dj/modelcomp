# NVIDIA Nemotron 3.5 Bolt 74B-A9B — findings by GPT 6 Sol

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Bolt 74B-A9B.
- **Short description:** NVIDIA's compressed vision-language agent model derived from Nemotron 3.5 Super VL. The BF16 release and its 24GB IQ2 variant are **precision versions of Bolt**, not independently trained model families; report their measurements separately ([NVIDIA BF16 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16), [NVIDIA 24GB card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)).
- **Provider / access:** Downloadable `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16` and compressed `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`; local vLLM OpenAI-compatible Chat Completions using the same model ID as the loaded checkpoint. No verified first-party paid per-token API tariff or Zen Free ID found ([NVIDIA card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16)).
- **Release / knowledge:** October 15, 2026 per [NVIDIA release field](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16); NVIDIA states post-training data cutoff May 2026, not a validated comprehensive knowledge cutoff.
- **IDs:** Official BF16 `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16`; official IQ2 `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`; third-party derivative quants are not the BF16 checkpoint.
- **Context window:** Up to **262,144 tokens** including prompts, media and responses; practical hardware/concurrency configurations can reduce it ([NVIDIA weights card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16)).
- **Modalities:** Text, images and video (up to two-minute mp4 with frame sampling) in, **text out**; JSON and function calls with model-specific parsers; optional thinking via `enable_thinking`, not another model ([NVIDIA BF16 card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16)). No audio.
- **Pricing (as of 2026-11-01):** No verified fixed API in/out rate. Open weights are downloadable but hosting and GPU memory have real cost; NVIDIA's quantized model targets **24GB** storage, not a guarantee that every full 256K request fits with other applications ([NVIDIA 24GB card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)).
- **Architecture:** **74B total / 9B active** Mamba-2/Transformer LatentMoE plus C-RADIO v4-H vision encoder. **OpenMDW-1.1**, not MIT/Apache ([NVIDIA card/license](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16)).

### Raw benchmarks found

- **Agent / tool use:** NVIDIA's BF16 table: [Terminal-Bench 2.1 **53.93%**, MCP-Atlas **55.60%**, GDPVal-AA-V2 **31.13**, BrowseComp **70.00%**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16/raw/main/README.md). Its *24GB IQ2* scores **50.98%, 52.20%, 28.47, 66.75%**, respectively, in the same table. [Primitive AI independently tested NVIDIA's 24GB quant on a 200-item tool-calling suite: **81.0%**, versus **82.0%** for its separate Q8 reference](https://huggingface.co/primitive-ai/Nemotron-3.5-Bolt-74B-A9B-mixed-NVFP4-FP8). The independent run is **not** BF16 or MCP-Atlas and assesses different prompts.
- **Reasoning:** NVIDIA BF16 [GPQA Diamond **88.83%**, HLE without tools **28.73%**, τ³ Banking **17.01%**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16/raw/main/README.md); IQ2 GPQA **86.43%**, HLE **25.30%**. Results indicate quantization loss; the 24GB release must not be assigned BF16 scores.
- **Coding:** Vendor [BF16 SciCode **44.49%**, IQ2 **41.02%**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16/raw/main/README.md). Independently [Myric's 42-task OpenCode/pytest agentic-coding suite on the *NVIDIA 24GB GGUF* has **39/39 valid passed, 3 voided**](https://huggingface.co/Myric/apex-quant-benchmarks). It is one run with a private saturating harness; 3 timeout/cap voids are *not* 3 wrong answers or proof of perfect full coverage.
- **Long context:** Vendor BF16 [AA-LCR **67.38%**, IQ2 **64.06%**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16/raw/main/README.md). Despite the name, these numbers are in NVIDIA's own table; no independent 256K-window measurement found. [Primitive AI explicitly did not test past 32K](https://huggingface.co/primitive-ai/Nemotron-3.5-Bolt-74B-A9B-mixed-NVFP4-FP8).
- **Vision:** NVIDIA BF16 [WebArena vision **50.25%**, IQ2 **50.86%**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16/raw/main/README.md), a web-agent task rather than MMMU-Pro; no independently verified image/video understanding score established.

### Normalized scores (1–100)

- **Tool use: 72/100.** BF16 MCP-Atlas 55.6 and terminal 53.93 plus a separate independent IQ2 tool check; generality remains uncertain.
- **Reasoning: 80/100.** BF16 GPQA 88.83, but HLE 28.73 and IQ2 drop constrain confidence.
- **Context window: 71/100.** 256K advertised and vendor LCR 67.38, no independent near-cap test.
- **Multimodal: 76/100.** Image/video input with a vendor vision-agent result, but text-only output and no independent video score.
- **Coding: 67/100.** BF16 SciCode 44.49; quantized local agent passes all *valid* tasks in a small saturating suite with three voids.
- **Cost efficiency: 91/100.** Open weights, 9B active and 24GB precision option, balanced against GPU/runtimes and no verified fixed hosted price.
- **Overall Score: 73/100.** Half-up mean (72 + 80 + 71 + 76 + 67) / 5 = 73.2; attractive local vision-enabled agent if quantization and context constraints are acceptable.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Independent model, full-text and dataset searches; official BF16 and IQ2 NVIDIA scores kept separate and cross-checked with independently run, quant-specific tool/coding evaluations. Scores are normalized judgments.
- Reference URLs:
  - [NVIDIA official BF16 model card and side-by-side BF16/IQ2 benchmarks](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16)
  - [NVIDIA official 24GB quant model card and deployment](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)
  - [Primitive AI independently run IQ2 tool-calling comparison](https://huggingface.co/primitive-ai/Nemotron-3.5-Bolt-74B-A9B-mixed-NVFP4-FP8)
  - [Myric independent OpenCode 42-task quantized-model coding suite](https://huggingface.co/Myric/apex-quant-benchmarks)
- Future sources: add a new file next to this one using the same headings.
