# Inkling — findings by Ling 3.1 Flash

- Source: Thinking Machines Lab (`opencode/Inkling`; API `thinkingmachines/inkling` via Tinker; also Baseten, Together AI, Modal; weights on HuggingFace)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's July-2026 open-weights (Apache 2.0) generalist — 975B-parameter MoE (41B active) pretrained on 45T tokens of text/images/audio/video — with HLE 46.0% (w/tools), GPQA Diamond 87.2%, MCP Atlas 76.0%, BrowseComp 77.1%, SWE-bench Verified 77.6%, VoiceBench 91.4% and a 1M context; a broad, balanced multimodal foundation model rather than a benchmark specialist.
- **Provider / access:** Thinking Machines — Tinker API (64K/256K context options, effort dial 0.2–0.99, 50% launch discount), AI Gateway via Baseten/Together AI/Modal; open weights on HuggingFace (1M context).
- **Release / knowledge:** 2026-07-15; knowledge cutoff not published.
- **IDs:** `opencode/Inkling` / `thinkingmachines/inkling`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 1M-token window (256K served on Tinker) and takes text, image and audio input.
- **Context window:** 1,048,576 tokens (open weights); 256K max on the Tinker API; 262,144 max output.
- **Modalities:** text, image, audio in; text out.
- **Pricing (as of 2026-10-02):** $1.00/$4.05 per 1M input/output (Tinker, 64K context; blended ~$0.72/M at 7:2:1); AA-reported list $1.87/$4.68 (64K) and $3.74/$9.36 (256K) with cache reads at ~37% of input; 50% launch discount; 160 tok/s; open weights free to self-host.
- **Architecture:** 975B-total/41B-active MoE, 66 layers, each token routed to 6 of 256 experts plus 2 shared experts; local-global attention mix; native hierarchical patch encoder (images) and discrete token encoding (audio, 16kHz WAV); effort control via system message with per-token training cost.

### Raw benchmarks found

All evals at effort=0.99, temperature 1.0; coding evals with a 256K max-token trajectory limit (Thinking Machines launch, 2026-07-15):

Reasoning / knowledge:

- Humanity's Last Exam: **46.0%** with tools / **29.7%** text-only (earlier checkpoint noted)
- GPQA Diamond: **87.2%**; AIME 2026: **97.1%**
- SimpleQA Verified: **43.9%** (weakest area per the vendor — pair with retrieval)
- AA-Omniscience: **+2.1** (40% accuracy, 63% hallucination rate — weak)
- IFBench: **79.8%**; Global-MMLU-Lite: **88.7%**
- AA Intelligence Index: **41** at launch (leading U.S. open-weights release; above Nemotron 3 Ultra's 38, Gemma 4 31B's 29, gpt-oss-120b's 24); **25** on the current AA Index v4.3.2 page (xhigh)

Agentic / tool use:

- MCP Atlas: **76.0%**; Toolathlon Verified: **45.5%**; τ³-Banking: **23.7–24%**
- BrowseComp (w/ context management): **77.1%**
- GDPval-AA v2: **1238 Elo** (above Kimi K2.6's 1190 and DeepSeek V4 Flash max's 1189; below GLM-5.2's 1514, DeepSeek V4 Pro's 1307, GPT-5.6 Sol's 1748, Fable 5's 1760)
- SWE-bench Verified: **77.6%** (bash-only harness; external models self-reported)
- SWE-bench Pro Public: **54.3%**
- Terminal-Bench 2.1: **63.8%** (internal harness; contaminated solutions zeroed)
- Token efficiency: matches Nemotron 3 Ultra on Terminal-Bench 2.1 at ~1/3 the tokens; averages 25K output tokens per Intelligence Index task (vs 43K GLM-5.2 max, 38K Kimi K2.6, 37K DeepSeek V4 Pro max)

Multimodal:

- VoiceBench: **91.4%**; MMAU: **77.2%**; Audio MC: **56.6%**
- MMMU Pro Standard: **73.5%**; CharXiv RQ: **78.1%** (**82.0%** with a Python image-cropping tool)

Safety:

- FORTRESS Adversarial **78.0%** / Benign **95.9%**; StrongREJECT **98.6%**

### Normalized scores (1–100)

- **Tool use: 74/100.** MCP Atlas 76.0% and BrowseComp 77.1% (w/ context management) are strong, with SWE-bench Verified 77.6% supporting; Toolathlon Verified 45.5%, τ³-Banking 23.7% and Terminal-Bench 2.1 63.8% sit well under the frontier bands.
- **Reasoning: 76/100.** HLE 46.0% with tools reaches the 40%+ frontier band, and GPQA Diamond 87.2% plus AIME 2026 97.1% support; HLE text-only 29.7%, the AA Intelligence Index (41 at launch, 25 on the current v4.3.2 Index) and AA-Omniscience +2.1 cap the score.
- **Context window: 92/100.** 1M-token window in the open weights (the Tinker API serves 64K/256K options); no ≥98%-at-depth retrieval figure published.
- **Multimodal: 92/100.** Native text/image/audio input with text output — the audio-in band (90–100); VoiceBench 91.4%, MMAU 77.2% and MMMU Pro 73.5% support.
- **Coding: 70/100.** SWE-bench Verified 77.6% (bash-only harness) and SWE-bench Pro Public 54.3% are mid-tier, and Terminal-Bench 2.1 63.8% (internal harness, contamination zeroed) is well under the 85% frontier bar; matching Nemotron 3 Ultra at ~1/3 the tokens is a documented efficiency plus.
- **Cost efficiency: 89/100.** $1.00/$4.05 per 1M (blended ~$0.72/M at 7:2:1) sits just under the ~$1.25/$4.25≈88 anchor, with 50%-off launch pricing and cache reads at ~37% of input; the 256K Tinker tier costs $3.74/$9.36, and the Apache-2.0 weights are free to self-host.
- **Overall Score: 81/100.** (74+76+92+92+70)/5 = 80.8 → 81 — the leading U.S. open-weights release (HLE 46.0% w/tools, MCP Atlas 76.0%, VoiceBench 91.4%, 1M context, Apache 2.0) held back by mid-tier coding (TB2.1 63.8%, SWE-bench Pro 54.3%) and weak factual recall (SimpleQA 43.9%, AA-Omniscience +2.1).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Thinking Machines Inkling launch, Artificial Analysis, Vercel AI Gateway, Sebastian Raschka's architecture notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Inkling.md`, using the same headings.
