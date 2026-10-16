# Inkling — findings by Cat Jam

- Source: Thinking Machines Lab / Inkling (`opencode/Inkling`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (Thinking Machines)
- **Short description:** TML's first full open-weight production model (released July 15, 2026; 975B total / 41B active MoE; text/image/audio in, text out; 1M context). Hybrid local-global attention, effort control; native multimodal.
- **Provider / access:** Tinker API (proprietary Tinker platform) for fine-tuning, OpenRouter/DeepInfra for inference (64K/256K context via Tinker), open weights (BF16/NVFP4) on HuggingFace under TML license. Not a product on standard chat API.
- **Release / knowledge:** Released 2026-07-15. No knowledge cutoff published in publicly indexed docs (pretraining 45T multimodal).
- **IDs:** `thinkingmachines/Inkling`, open-source (license? from context).
- **Context window:** 1,048,576 tokens (weights), Base open model; Tinker lists 64K/256K service windows.
- **Modalities:** Text, image, audio in; text out. Native audio (16kHz), image, long context. No video? audio yes.
- **Pricing (as of 2026-10-16):** Tinker 64K window: $1.87 prefill / $0.374 cached / $4.68 sample / $5.61 train; 256K: $3.74 / $0.748 / $9.36 / $11.23. Limited-time 50% promo (also TML docs).
- **Architecture:** 66-layer MoE 975B/41B active, 256 routed experts, 6 active + 2 shared per token, GQA local/global attention, learned relative-position bias instead of RoPE, short convs. Not a standard MoE pattern; weights open under TML terms.

### Raw benchmarks found (vendor table + AA)

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (vendor, best harness with contamination caveats)
- MCP Atlas: **76.0%**
- Toolathlon Verified: 45.5%
- BrowseComp: **77.1%** (with context management)
- DeepSearchQA? not in sampled vendor table
- τ³ banking: 23.7%
- OSWorld? not on table for Inkling? likely no
- GDPval-AA Elo 1238 (AA model card table? vendor table gives 1238?)

Reasoning / knowledge:

- HLE no tools/tools: **29.7% / 46.0%** (vendor; AA HLE 31.9 for Xhigh)
- GPQA Diamond: AA **87.2%** / OpenAI? AA measured
- AIME 2026 97.1%
- AA Intelligence Index (Xhigh): **25.0** (AA measured; composite)
- AA-Omniscience: 2.1 index, 41.5% accuracy, 32.3% non-hall
- IFBench 79.8%
- Global-MMLU-Lite 88.7%
- SimpleQA Verified 43.9%

Coding:

- SWE-bench Verified: **77.6%**
- SWE-bench Pro: **54.3%**
- Terminal-Bench 2.1: 63.8%
- LiveCodeBench (Vals): **85.5%**
- FrontierCode 1.1? no
- SciCode: 47.0

Multimodal:

- MMMU Pro Standard 10: **73.5%**
- CharXiv RQ: 78.1% / with python 82.0%
- Audio: VoiceBench 91.4, MMAU 77.2, Audio MC 56.6 (multimodal audio; fewer official comparisons may be missing for other models)
- Video understanding? some.
- OmniDoc? not sampled

Long context:

- 1M context, AA-LCR 77.3. Tinker service 64/256K.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 63.8, MCP Atlas 76.0, BrowseComp 77.1, Toolathlon 45.5; OEM although agent features less than Pro closed models.
- **Reasoning: 84/100.** HLE 29.7 (46.0 tools), GPQA 87.2, AIME 97.1, AA Index 25; IFBench 79.8, ARC-AGI? not sampled. Summary: 84.
- **Context window: 92/100.** 1M with AA-LCR 77.3; native long context.
- **Multimodal: 86/100.** Joint text/image/audio; CharXiv 82, MMMU Pro 73.5; audio tools 91/77/56. Strongest open-weight with audio in this queue.
- **Coding: 80/100.** SWE 77.6, TB 63.8, LiveCode 85.5; strong open 975B but not top.
- **Cost efficiency: 90/100.** $0.95 (cache 20%)/$4.05 per 1M; open weights; Tinker 64/256K. Good value for a huge model.
- **Overall Score: 84.8/100.** Mean (82+84+92+86+80)/5 = 84.8. Strong U.S open model with audio; data-center self-host heavy.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (TML model card, Thinking Machines Inkling page, OpenRouter, AA article, Raschka); scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
