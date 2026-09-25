# Inkling — findings by Big Pickle

- Source: Thinking Machines Lab / Inkling (`thinkingmachines/Inkling`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (Thinking Machines Lab open-weights MoE; the 276B/12B **Inkling-Small** is a separate sibling, not scored here)
- **Short description:** Thinking Machines Lab's first open-weights release — a natively multimodal (text/image/audio) sparse Mixture-of-Experts transformer, 975B total / 41B active, Apache 2.0, trained on text, images, audio and video, with a 1M-token context and an explicit "thinking effort" control driven through the system message. The rare combination in this dataset: **open Apache 2.0 weights + 1M context + native audio input + tool use**, aimed at agentic coding, research and self-hosted or fine-tuned deployments. Mid-tier on measured agentic and coding quality: strong on SWE-bench Verified, clearly weaker on terminal agentic work and long-horizon frontier code.
- **Provider / access:** No first-party inference API — Apache 2.0 weights on Hugging Face (`thinkingmachines/Inkling`, plus `thinkingmachines/Inkling-NVFP4`, a `:peft:262144` PEFT variant and 50+ community quantizations). First-party route is Tinker (`https://tinker.thinkingmachines.ai/playground`, Tinker Cookbook) which serves only 64K/256K context. Hosted OpenAI-compatible Chat Completions across OpenRouter (`thinkingmachines/inkling`, `thinkingmachines/inkling:free`), Fireworks AI (`accounts/fireworks/models/inkling`), Together AI, DeepInfra, Baseten, Databricks, Modal, NVIDIA build.nvidia.com, Vercel AI Gateway, Hyper, Venice, kilo.ai and llmgateway. Local deployment documented for SGLang, vLLM, TokenSpeed, Unsloth and Hugging Face. **Note:** this folder's `meta.json` references `opencode/Inkling` ("128K total", "Text in/out"), but **no `Inkling` key exists in the current models.dev `opencode` or `opencode-go` catalogs** — the model appears delisted from OpenCode's live endpoint, and the `meta.json` modality/context fields are stale (Inkling takes image and audio in, and 1M on the weights).
- **Release / knowledge:** released 2026-07-15 (Inkling-Small 2026-07-30); comparison scores generated 2026-07-14. Knowledge cutoff not published. Trained on 45T-token-class data per third-party notes; officially "publicly available sources, third-party acquired sources, and synthetically generated or augmented data".
- **IDs:** `thinkingmachines/Inkling` (Hugging Face / most hosts), `thinkingmachines/inkling` (OpenRouter, lowercase), `thinkingmachines/inkling:free` (OpenRouter free variant), `accounts/fireworks/models/inkling` (Fireworks), `databricks/databricks-inkling` (Databricks), `inkling` (Baseten/Venice/Hyper/DeepInfra). No Free ID on OpenCode Zen — the ID is absent entirely.
- **Context window:** **1,000,000 tokens** (1,048,576 in models.dev) on the weights and on OpenRouter/Fireworks/Databricks/Baseten/Hugging Face; **524,288** on Together AI, DeepInfra and kilo.ai; **262,144 / 256,000** on some hosts and on the PEFT variant; **65,536 / 256,000** on Tinker. Max output is the inconsistent part: 471,859 (OpenRouter), 262,144 (OpenRouter `:free`, DeepInfra, Modal), 131,072 (Together, Abacus), 32,768 (Baseten, nano-gpt), 16,384 (NVIDIA). Vals ran it at 256K context with 256K max output.
- **Modalities:** **text, image and audio in; text out** (models.dev lists `text,image,audio` on most hosts; a few hosts expose only `text,image`, and one gateway lists `text,image,pdf`). Images ideally 40px–4096px per dimension; audio WAV at 16kHz, ideally under 20 minutes. Reasoning yes, with a user-controllable **effort** value (official benchmarks are reported at effort=0.99) set via the system message. Tool calls supported. **Video is trained on but not exposed as an input modality** — Vals explicitly reports "Video input not supported" and no host lists video.
- **Pricing (as of 2026-09-25):** **$1.00 in / $4.05 out per 1M** on OpenRouter, Fireworks, Together, Databricks and the Hugging Face route; $0.95 in on DeepInfra and kilo.ai; $1.20/$5.00 on Modal's NVFP4; $1.0888/$4.40964 on Hyper; $1.25/$5.0625 on Venice; $1.87/$4.68 on Requesty and Impossibl; $3.74/$9.36 on the 256K PEFT variant. Free routes: `thinkingmachines/inkling:free` on OpenRouter ($0/$0) and the NVIDIA build ($0/$0). Vals measured **$1.354 per test**. For scale: Inkling-Small is $0.45–0.50 in / $1.20 out, roughly a quarter of the price.
- **Architecture:** 975B total / 41B active, sparse MoE, Apache 2.0 open weights. A 66-layer decoder-only transformer where each token routes to **6 of 256 experts plus 2 shared experts active on every token**, with a hybrid of local and global attention layers. Natively multimodal in the decoder: images and video via a hierarchical patch encoder, audio via discrete token encoding, all projected into a shared hidden space. Numerics: BF16, MXFP4/NVFP4 and MXFP8. Trained on NVIDIA GB300 NVL72-class systems (stated for Inkling-Small). No public parameter-count, architecture or training-token figure beyond the above.

### Raw benchmarks found

> All official numbers below are the **Inkling column at effort=0.99** from the Thinking Machines model card, with comparison scores generated 2026-07-14. Independent confirmations from Artificial Analysis, evals.report, Vals and BenchLM are labelled separately. The evidence base is unusually good for a 2026 open-weights release — every headline has at least one third-party replication.

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (official, "best harness", 256K trajectory, contamination-scored 0; evals.report lists it as **Verified**; Benchgen/BenchLM also list 63.8; **independent Vals run across three full trials: 47.57%** — a 16-point spread between harnesses)
- Tau3-Banking: **23.7%** (official; vs Nemotron 3 Ultra 13.8, Kimi K2.6 20.6, GLM 5.2 26.8, DeepSeek V4 Pro 25.8, Claude Fable 5 26.8, GPT 5.6 Sol 33.0)
- GDPval-AA v2: **1233** Elo on the Hugging Face card, **1238** on the thinkingmachines.ai card and in the Inkling-Small comparison table, **1234** via BenchLM; AA Agentic Index **34.1%**; AA-EnterpriseOps-Gym **38.0%**; AA-Briefcase **839** Elo. (vs Kimi K2.6 1190, GLM 5.2 1514, DeepSeek V4 Pro 1307, Claude Fable 5 1760, GPT 5.6 Sol 1748)
- MCP-Atlas: **74.1%** (Hugging Face card and evals.report **Verified**; **#12 of 25** on the Benchgen leaderboard, ahead of DeepSeek V4 Pro 73.2 and GPT-5.4 67.2, behind GLM 5.2 77.8 and Gemini 3.1 Pro 78.2). The updated vendor model card prints **76.0%**, and the Inkling-Small card lists **78.8% public / 76.0% all** for Inkling — three slightly different subsets, same ballpark.
- Toolathlon Verified: **45.5%** (official; vs Nemotron 34.3, GLM 5.2 59.9, DeepSeek V4 Pro 55.9, GPT 5.6 Sol 73.1)
- BrowseComp with context management: **77.1%** (official; vs Kimi K2.6 83.2, DeepSeek V4 Pro 83.4, Gemini 3.1 Pro 85.9, GPT 5.6 Sol 90.8)
- HLE with tools: **46.0%** vs **29.7% text-only** — a **+16.3 point** gain from tool use, evidence that it actually exploits tools rather than ignoring them
- Claw-Eval / ClawProBench / Toolathon (distinct from Toolathlon) / SWE Atlas Codebase QnA: **no verified public score found**
- Operational caveat: the DeepInfra `deepinfra/inkling` endpoint is catalogued with `tool_call: false` — tool use depends on the host

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (official; HF eval_results file; evals.report **Verified**; independent Vals run **87.1%**; BenchLM 87.9%. vs Nemotron 86.7, Kimi K2.6 91.1, GLM 5.2 89.5, DeepSeek V4 Pro 88.8, Gemini 3.1 Pro 94.1, GPT 5.6 Sol 94.1)
- HLE: **29.7% text-only / 46.0% with tools** (official; AA's own run **31.9%**; evals.report **Verified** at 29.7). vs GLM 5.2 40.1, Gemini 3.1 Pro 44.7, Claude Fable 5 53.3, GPT 5.6 Sol 47.2
- Artificial Analysis Intelligence Index v4.1: **41** (AA model page, Inkling at xhigh); **42.3%** and overall **62.78/100, #55 of 411** (BenchLM, 2026-09-04, partial coverage so "conservative"); **41.0%** in the vendor's Inkling-Small table
- AIME 2026: **97.1%** (official; evals.report **Verified**; vs GLM 5.2 99.2, GPT 5.6 Sol 99.9). HMMT Feb 2026: **86.3%**
- CritPt: **5.4%** (BenchLM) — very weak
- AA-Omniscience: Index **2.1** (official; BenchLM 2.0), **accuracy 41.6%**, **hallucination rate 67.7%** — the model's clearest weakness
- IFBench: **79.8%** (official; vs Nemotron 81.4, GLM 5.2 73.3, Gemini 3.1 Pro 77.1)
- Global-MMLU-Lite: **88.7%** (official). MMLU-Pro (Vals): **86.3%**. SimpleQA Verified: **43.9%** (official; vs DeepSeek V4 Pro 57.0, Gemini 3.1 Pro 77.3)
- AA-LCR (long-context reasoning): **73.3%** (BenchLM)
- LEXam-hard (legal): **40.82%** (HF community eval, marked estimated)
- ARC-AGI-1/2, ForecastBench, Omniscience open-set accuracy: no isolated per-model Inkling figure found

Coding:

- SWE-bench Verified: **77.6%** (official at effort=0.99; HF eval_results; evals.report **Verified**; independent Vals subset **75.49%**). vs Nemotron 70.7, Kimi K2.6 80.2, DeepSeek V4 Pro 80.6, Gemini 3.1 Pro 80.6, Claude Fable 5 95.0
- SWE-bench Pro (Public): **54.3%** (official; evals.report **Verified**; vs GLM 5.2 62.1, DeepSeek V4 Pro 55.4, Kimi K2.6 58.6, GPT 5.6 Sol 64.6)
- LiveCodeBench: **85.5%** (Vals)
- SciCode / AA-SciCode: **46.1%** (BenchLM; vs Nemotron 39.9, Kimi K2.5 43.1, GLM 5.2 44.9, Gemini 3.1 Pro 50.0)
- Vibe Code Bench: **13.28%** (Vals, #62 of 89) — weak despite high LiveCodeBench
- AA Coding Index: **52.1** (BenchLM/OpenRouter listing). AA Agentic Index 34.1%
- FrontierCode: **14.0%** weighted score (evals.report, status **Official**); FrontierSWE v2: **4.1%** (BenchLM) — both very weak on long-horizon frontier code
- Design Arena: Website Elo **1227**, Agentic Web Dev **1257** (BenchLM)
- DeepSWE: **no verified public score found** (the vendor table omits it)
- Professional verticals (Vals, all low): ProofBench 27/27, SkillsBench 32/32, ProgramBench 39/42, Finance Agent v2 45.97%, CorpFin v2 69.23%, Legal Research 27/54, Harvey's Legal Agent 28/55, EMB 38/51, CyberBench 16/23, SAGE 54/78, Public Benefits Bench 22/32, MedCode 43/88, MedScribe 18/90, MortgageTax 50/97, TaxEval v2 20/144, Code Migration 40/53
- Speed/latency: Vals recorded a **19 min 37 s** average latency per task on the Vals Index — very slow at effort=0.99

Long context:

- AA-LCR **73.3%** (long-context reasoning) and BrowseComp with context management **77.1%** are the only long-horizon evidence
- **No MRCR / RULER / GraphWalks retrieval score published** at any window length — nothing verifies the advertised 1M empirically

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 at 63.8% sits just above the methodology's mid band (45–60%) and Tau3-Banking 23.7% dead-centre in the 10–25% band, with GDPval-AA 1233 just over the 900–1200 mid band; MCP-Atlas 74.1% and the +16.3-point HLE text-only→with-tools swing are genuinely solid. Capped at 70 by the independent Vals Terminal-Bench run collapsing to 47.57%, a 45.5% Toolathlon, weak professional-agent subsets, no Claw-Eval or Toolathon score, and no host-independent tool-use replication.
- **Reasoning: 75/100.** GPQA Diamond 87.2% (independently replicated at 87.1% by Vals), AIME 2026 97.1%, HLE 46.0% with tools, AA-LCR 73.3% and an AA Intelligence Index of 41 all sit clearly above the 55–65 mid band; capped at 75 by HLE text-only 29.7%, a 5.4% CritPt, and an AA-Omniscience Index of 2.1 with a 67.7% hallucination rate — it reasons well and knows little.
- **Context window: 95/100.** The weights declare 1M tokens (1,048,576) and most hosts serve it. Held at the floor of the ≥1M band rather than 100 because **no retrieval benchmark exists at any length** — no MRCR, RULER or GraphWalks — and the only long-horizon evidence (AA-LCR 73.3%) is a reasoning proxy, not a needle test; host limits also vary widely (524K/256K/64K) and the vendor's own Tinker endpoint caps at 256K.
- **Multimodal: 92/100.** Text + image + **audio** in with text out places it in the methodology's 90–100 "+audio" tier, and it is the only open-weights model in the entire vendor comparison with audio numbers at all. Benchmarks are real but middling for the tier: MMMU-Pro 73.5%, CharXiv 78.1% (82.0% with Python), MMAU 77.2% and Audio MC 56.6% all trail Gemini 3.1 Pro (82.5 / 66.8), and video is trained on but not exposed as an input.
- **Coding: 76/100.** Clears every condition of the methodology's 65–75 mid composite — LiveCodeBench 85.5% (above the 80% anchor), Vibe Code Bench 13.28% (above the <10% trigger) and SciCode 46.1% (above the <40% trigger) — with SWE-bench Verified 77.6% independently confirmed at 75.49% by Vals. Justified above mid because all three mid-band triggers are cleared; capped well short of 90–100 by SWE-bench Pro 54.3%, SciCode below the 55% frontier line, AA Coding Index 52.1 vs the 70+ frontier, a 47.57% independent Terminal-Bench, and the weakest frontier-code results in the comparison (FrontierCode 14.0%, FrontierSWE v2 4.1%).
- **Cost efficiency: 89/100.** $1.00 in / $4.05 out per 1M on the major hosts sits in the methodology's "~$1.25/$4.25 ≈ 88" band, nudged up slightly for the sub-$1 DeepInfra/kilo tier ($0.95) and confirmed by Vals at $1.354 per test. Free $0 routes exist (OpenRouter `:free`, NVIDIA) but were not the evaluated tier; Inkling-Small at $0.45/$1.20 is the value alternative.
- **Overall Score: 82/100.** (70 + 75 + 95 + 92 + 76) / 5 = 81.6 → 82. Best fit: self-hosted or fine-tuned multimodal (especially **audio**) and long-context work on your own hardware or a cheap host — the only Apache 2.0 model here that takes audio natively at 1M context. If you want hosted terminal-agentic or frontier coding quality instead, GLM 5.2, Kimi K2.6 or DeepSeek V4 Pro are ahead of it on every tool-use and coding line, and Inkling-Small matches or beats it on SWE-bench Verified and Terminal-Bench at a quarter of the price.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-25
- Method: public internet research (Thinking Machines Lab official Inkling model card and Inkling-Small model card, the Hugging Face `thinkingmachines/Inkling` model card and its `.eval_results` files, Artificial Analysis Inkling (xhigh) model page, evals.report's Inkling row and Terminal-Bench 2.1 leaderboard, Vals AI's Inkling page, BenchLM's Inkling page, Benchgen's MCP-Atlas leaderboard, the models.dev provider catalog, and thinkingmachines.ai/inkling); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Thinking_Machines.md`, using the same headings.
