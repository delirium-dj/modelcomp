# Qwen3.8-27B — findings by Grok 4.6

- Source: Alibaba Qwen (`Qwen/Qwen3.8-27B` / `qwen3.8-27b`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba’s 2026-08-14 27B dense open-weight vision-language model (Apache 2.0): smaller companion to Qwen3.8-Max. Native 262K context, YaRN to 1M; thinking on by default. Not Qwen 3.8 (MoE/API flagship) and not Qwen 3.8 Flash.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-27B`; Alibaba Cloud Model Studio `qwen3.8-27b`; OpenRouter and other OpenAI-compatible hosts. Function calling, structured output, web search, prefix cache (Model Studio).
- **Release / knowledge:** 2026-08-14 (DataNorth). Knowledge cutoff not verified here.
- **IDs:** `qwen/qwen3.8-27b`, `Qwen/Qwen3.8-27B`. No OpenCode Zen Free ID found.
- **Context window:** Native **262,144**; Alibaba says extensible to **1,000,000**. Model Studio lists **context window 1,000,000**, max input ~991,808 / thinking input ~983,616, max output 131,072, max CoT 262,144 (docs updated 2026-09-10). Scored as **hosted 1M** with native-weights 262K caveat.
- **Modalities:** image, text, video in; text out (Model Studio). Reasoning effort xhigh/medium/low; `preserve_thinking`.
- **Pricing (as of 2026-10-01):** Model Studio Singapore **$0.50 / $3.00** per 1M; Beijing **$0.424 / $1.696**; implicit cache $0.10 SG / $0.085 CN. OpenRouter cited **$0.45 / $3.20** (DataNorth, Aug 2026). ARMES **$0.42 / $3**. Scored on Singapore list $0.50/$3.00.
- **Architecture:** 27B dense hybrid attention (Gated DeltaNet + Gated Attention), Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **73.0%** (Qwen launch table / Qubrid)
- OSWorld-Verified: **84.3%** (AI/TLDR)
- AndroidWorld: **81.9%** (AI/TLDR)
- Agents’ Last Exam: **42.9** score / **20.4** Pass@1 (Qubrid)
- JobBench: **33.4%**; CoWorkBench: **70.7%** (Qwen table)
- Tau3 / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Qwen / Qubrid)
- HLE: **30.8%** (Qwen / Qubrid)
- Artificial Analysis Intelligence Index: **52** at max effort (ARMES / Qubrid)
- IFBench: **79.5%** (Qwen)

Coding:

- SWE-bench Pro: **61.7%** (Qwen, Claude Code harness, temp 1.0, 256K ctx)
- LiveCodeBench v6: **90.3%** (Qwen / Qubrid)
- DeepSWE 1.1: **42.2%** (Qwen)
- QwenSWEBench: **79.0%** (Qwen internal)
- NL2Repo-Bench: **42.3%** (Qwen)
- SWE-bench Verified: no verified public score found

Long context:

- Hosted 1M / native 262K. MRCR / RULER / GraphWalks / AA-LCR: no verified public score found. Most official evals at 256K.

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.1 73% is above mid-band; OSWorld-Verified 84.3% and AndroidWorld 81.9% are strong computer/mobile use. Capped by no Tau3/GDPval/TB 4.0 and JobBench 33.4%.
- **Reasoning: 84/100.** Index 52 is near 60; GPQA 89.2% is near 90%+. Capped by HLE 30.8% (below 40%+).
- **Context window: 96/100.** Model Studio 1M maps to 95–100; 100 needs ~98% retrieval at 512K+. Native weights are 262K (would be ~72 if scoring only local weights).
- **Multimodal: 82/100.** Image + video in, text out → 75–90. No audio I/O on the Model Studio capability table.
- **Coding: 82/100.** LiveCodeBench 90.3% is excellent; SWE-Pro 61.7% is solid for 27B. Capped by DeepSWE 42.2% (far from 74%+) and no SWE-Verified.
- **Cost efficiency: 91/100.** SG $0.50/$3.00 sits next to ~$0.60/$2.20 ≈92 (worse on output). Beijing $0.424/$1.696 would score higher; scored on international list. Open weights also allow $0 self-host (not the evaluated API tier).
- **Overall Score: 86/100.** (84+84+96+82+82)/5 = 85.6 → 86 half-up. Best-fit: local or cheap API VL coder/agent at 27B when Max/MoE is unnecessary.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (Alibaba Cloud Model Studio docs, DataNorth, AI/TLDR, Qubrid, ARMES); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
