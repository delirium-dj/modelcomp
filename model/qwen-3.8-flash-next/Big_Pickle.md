# Qwen 3.8 Flash Next — findings by Big Pickle

- Source: Alibaba / Qwen (`Qwen/Qwen3.8-Flash-Next`; OpenCode Zen ID `qwen-3.8-flash-next`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Alibaba's open-weight experimental preview of the architecture that will underpin Qwen4 — hybrid attention (Gated DeltaNet + Qwen Sparse Attention), Gated Residual, a 51B-parameter N-gram embedding table and a bespoke Muon/AdamW training recipe. It is a genuinely distinct model from the managed `Qwen3.8-Flash` (which is *based on* these weights but adds production features such as 1M context by default and official built-in tools) and from the separate tracked entry `Qwen 3.8 Flash`. Top use case: cheap local or first-party-hosted agentic coding and multimodal (image + video) agent work at 6B active parameters.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.8-Flash-Next`, `qwen-community-1.0`, community license with conditional commercial use). Self-host via Transformers, vLLM, SGLang or TokenSpeed; Qwen ships a dedicated vLLM image `vllm/vllm-openai:qwen38-flash-next` plus SGLang and KTransformers cookbooks, and the model has day-0 GGUF/NVFP4 community quants. Hosted: OpenRouter `qwen/qwen3.8-flash-next`, Vercel AI Gateway, and first-party Qwen Cloud (as the base of `Qwen3.8-Flash`). All hosted routes are OpenAI-compatible Chat Completions.
- **Release / knowledge:** Released 2026-08-26. Knowledge cutoff not published on the model card.
- **IDs:** `opencode/qwen-3.8-flash-next` (Zen), `qwen/qwen3.8-flash-next` (OpenRouter), `Qwen/Qwen3.8-Flash-Next` (Hugging Face / ModelScope). No Free tier found — `noFreeId` applies; cost scored on paid list price.
- **Context window:** **262,144 tokens natively**, extensible to **1,000,000 via YaRN** (model card, verified). All published coding evals were run at a 256K context window. The 1M figure is an extrapolation technique, not a measured long-context result — see the long-context row.
- **Modalities:** Text, image, and video in; text out (the card publishes an `LVBench` long-video-understanding score of 76.6%, confirming video input); reasoning: yes; tool calls: yes (`--enable-auto-tool-choice`, `--tool-call-parser qwen3_coder` in the Qwen vLLM recipe); JSON/structured output: yes. No audio input or output route found.
- **Pricing (as of 2026-10-05):** OpenRouter **$0.15 in / $0.47 out / $0.016 cached read** per 1M; Vercel AI Gateway **$0.12 in / $0.40 out** per 1M; self-host free under the community license (conditional commercial use). Paid only — no $0 tier, so no training-data caveat. These are among the cheapest per-token routes for a model of this capability.
- **Architecture:** Open-weight MoE with a vision encoder. 125B parameters with **6B activated** per token, plus a **51B N-gram embedding** table (20,000,000 bigram/trigram entries at layer 2) and a **4B MTP** head — hence the frequently quoted 176B on-disk figure. 48 layers, hidden dimension 2560, 512 experts with 10 routed + 1 shared active per token, expert intermediate dimension 640, Gated Residual with 4 branches at bottleneck rank 320. Hidden layout `12 × (3 × (Gated DeltaNet → MoE) → 1 × (Qwen Sparse Attention → MoE))`.

### Raw benchmarks found

All figures are the **vendor's own eval table** from the official `Qwen/Qwen3.8-Flash-Next` model card (harness notes in the table: DeepSWE 1.1 evaluated on both Claude Code and mini-SWE-agent at temp 1.0 / top_p 0.95 / 256K, best-of reported; SWE-bench Pro on the Claude Code harness with problematic tasks corrected and all baselines re-evaluated; SWE-bench Multilingual on mini-SWE-agent; NL2Repo-Bench on Claude Code with repo-fetching Bash commands disabled; CoWorkBench and RecreationBench are Qwen in-house benchmarks; HLE judged by GPT-4o). No third-party run of this exact checkpoint was found.

Agent / tool use:

- Toolathlon Verified (Pass@1): **73.5%**
- ClawEval-MM (multimodal tool use): **Pass@3 64.4% / average 60.4%**
- OSWorld 2.0 (computer use): **binary 19.4% / partial 52.3%**
- Agents' Last Exam: **Pass@1 24.3% / Score 51.2%**
- JobBench (professional job tasks): **55.7%**
- CoWorkBench (long-horizon office work): **73.9%**
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA: no verified public score found
- Toolathon / MCP-Atlas / SWE-Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%**
- HLE: **35.9%** (judged by GPT-4o)
- LiveCodeBench v6: **91.9%**
- IFBench: **81.3%**
- Artificial Analysis Intelligence Index / CritPt / LCR / MLCR / Omniscience: no verified public score found

Coding:

- DeepSWE 1.1: **58.7%**
- SWE-bench Pro: **62.5%** (independently ranked **#9 of 46** by LLM Reference)
- SWE-bench Multilingual: **81.0%**
- NL2Repo-Bench: **48.1%**
- LiveCodeBench v6: **91.9%**
- SWE-bench Verified / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported. 262,144 is native and 1,000,000 is reachable only through YaRN position scaling; no MRCR, RULER or GraphWalks number was published for this checkpoint.

Multimodal / vision (vendor-reported, for the scoring dimension):

- LVBench (long video understanding): **76.6%**
- MathVision: **90.6% without CI / 95.7% with CI**
- CharXiv (RQ): **84.6% without CI / 90.6% with CI**
- RealWorldQA: **88.5%**
- AndroidWorld: **84.5%**
- ERQA (embodied): **72.3%**
- Vision2Web: **64.0%**
- RecreationBench (application recreation, in-house): **49.9%**

### Normalized scores (1–100)

- **Tool use: 74/100.** Toolathlon Verified 73.5% at Pass@1 is a genuinely strong real-world tool-use result, and ClawEval-MM at Pass@3 64.4% / average 60.4% shows the same competence carries over to multimodal tool use; CoWorkBench 73.9% confirms long-horizon task execution. Capped well below the 90–100 frontier tier by OSWorld 2.0 **binary 19.4%** — on strict full-reward computer use this checkpoint barely completes one task in five — and by Agents' Last Exam Pass@1 of only 24.3%. No Tau3-Banking or GDPval-AA figure exists to corroborate the strong side.
- **Reasoning: 88/100.** GPQA Diamond 91.7% clears the 90%+ frontier marker and LiveCodeBench v6 91.9% is elite competitive-coding reasoning, with IFBench 81.3% and MathVision 90.6/95.7% backing it up. Held just under the 90–100 band because HLE is 35.9%, short of the 40%+ companion threshold, and every number is a single self-reported vendor table with GPT-4o as HLE judge.
- **Context window: 74/100.** Native 262,144 lands in the 200K–500K tier (where 200K = 70), and the YaRN path to 1,000,000 adds a couple of points because it is a real documented technique — but it is unmeasured for this checkpoint and every published eval ran at 256K. No retrieval benchmark exists, so the ≥1M band is unreachable.
- **Multimodal: 84/100.** Text + image + **video** in with text out places it squarely in the 75–90 video band, and the vision evidence is strong rather than token: LVBench 76.6%, CharXiv RQ 84.6/90.6%, MathVision 90.6/95.7%, RealWorldQA 88.5%, AndroidWorld 84.5%. Held below 90 because there is no audio route at all, and the action side is inconsistent — OSWorld 2.0 binary 19.4% and RecreationBench 49.9% are weak despite excellent perception.
- **Coding: 78/100.** SWE-bench Pro 62.5% (ranked #9 of 46 independently), SWE-bench Multilingual 81.0% and LiveCodeBench v6 91.9% are all strong, comfortably above the 65–75 mid band. Capped because DeepSWE 1.1 at 58.7% is well under the 74%+ frontier marker, NL2Repo-Bench is 48.1%, and there is no SWE-bench Verified, SciCode or Vibe Code Bench number for this checkpoint at all.
- **Cost efficiency: 95/100.** OpenRouter $0.15/$0.47 with a $0.016 cache read (Vercel cheaper still at $0.12/$0.40) is exceptional for this capability class — well past the ~$0.60/$2.20 ≈ 92 anchor and closer to the ~$0.10/$0.20 ≈ 97–99 band, though the higher output rate keeps it from there. Not 100: there is no $0 tier.
- **Overall Score: 80/100.** Half-up mean of 74 / 88 / 74 / 84 / 78. Best fit: the best value-per-dollar open-weight agentic coder with real video understanding, especially when self-hosting at 262K context — but reach for a stronger orchestrator on strict computer-use tasks, where its binary OSWorld score is a hard ceiling.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-05
- Method: public internet research (official `Qwen/Qwen3.8-Flash-Next` Hugging Face model card with its full language and vision-language eval tables, Qwen blog and technical report links, ModelScope mirror, LLM Reference and llm-stats provider/pricing records, NVIDIA developer-forum deployment threads, and OpenRouter/Vercel pricing). Every number carries its source and harness; gaps are stated as gaps. Scores are normalized 1–100 interpretations per `../../model-comparison.md`, not official vendor scores.
- Known caveats: every benchmark is vendor-self-reported on Qwen-chosen harnesses with Qwen-chosen in-house benchmarks (CoWorkBench, RecreationBench) mixed in; the quoted "176B" parameter count is 125B + 51B n-gram + 4B MTP, not a single dense model; the 1M context figure is YaRN extrapolation from a 262K native window; and this is an explicitly experimental preview checkpoint, so Qwen4 may differ.
- Future sources: add a new file next to this one, e.g. `DeepSeek_4.1_Flash.md`, using the same headings.