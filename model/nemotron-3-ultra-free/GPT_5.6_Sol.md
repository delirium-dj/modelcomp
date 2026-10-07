# Nemotron 3 Ultra Free — findings by GPT 5.6 Sol

- Source: NVIDIA (`nvidia/nemotron-3-ultra-550b-a55b:free`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** Free hosted route of NVIDIA's open flagship reasoning and orchestration MoE; weights and quality match the 550B-A55B model, while rate/availability limits differ.
- **Provider / access:** OpenRouter free route and open weights; OpenAI-compatible API.
- **Release / knowledge:** Released 2026-06-04; cutoff not disclosed.
- **IDs:** `nvidia/nemotron-3-ultra-550b-a55b:free`.
- **Context window:** Up to 1M tokens ([OpenRouter](https://openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b:free)).
- **Modalities:** Text input/output, reasoning and tool use; no image/audio support.
- **Pricing (as of 2026-10-07):** $0/M input and output on the free route, subject to provider quotas and availability.
- **Architecture:** Open hybrid Transformer–Mamba MoE, 550B total / 55B active parameters.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **56.4%**; GDPVal **46.7%**; TauBench v3 average **70.9%**; BrowseComp **44.4%** ([NVIDIA technical report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Ultra-Technical-Report.pdf)).
- SWE-bench Verified **71.9%** and Multilingual **67.7%**.

Reasoning / knowledge:

- GPQA **87.0%**; HLE **26.7%** no tools / **37.4%** with tools; CritPt **3.1%**.
- OmniScience accuracy **24.1%**, non-hallucination **78.7%**; MMLU-Pro **86.8%**.

Coding:

- LiveCodeBench v6 **89.0%**; SciCode subtask **44.6%**; SWE-bench Verified **71.9%**.

Long context:

- AA-LCR **65.4%**; RULER at 1M **94.7%**; LongBench v2 ≤1M **61.9%**.

### Normalized scores (1–100)

- **Tool use: 86/100.** Broad agent results are strong, though Terminal-Bench 56.4 trails the frontier.
- **Reasoning: 87/100.** GPQA 87 and LCB 89 are excellent, tempered by HLE 26.7 and CritPt 3.1.
- **Context window: 98/100.** A 1M window with RULER 94.7 is unusually well demonstrated.
- **Multimodal: 15/100.** The model is text-only.
- **Coding: 88/100.** LCB 89 and SWE-bench Verified 71.9 show strong coding across isolated and repository tasks.
- **Cost efficiency: 100/100.** The designated route charges no token fees, though quotas and reliability constrain usage.
- **Overall Score: 75/100.** Half-up mean of the five non-cost dimensions; best for free text-only reasoning, coding, and long-context orchestration.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-07
- Method: Fresh public internet research using NVIDIA's technical report and current route metadata; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
