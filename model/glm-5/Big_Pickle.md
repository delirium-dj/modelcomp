# GLM-5 — findings by Big Pickle

- Source: Z.AI / Zhipu AI (`glm-5`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Zhipu AI / Z.AI's February 2026 open-weights flagship, aimed at complex systems engineering and long-horizon agentic tasks. The launch blog framed it as "from Vibe Coding to Agentic Engineering" and claimed ~20% average improvement over GLM-4.7, comparable to Claude Opus 4.5 and GPT-5.2 (xhigh). Superseded in the same family by GLM-5.1 (2026-05), GLM-5.2 (2026-08) and GLM-5.3 (2026-09), but still generally available via Z.AI API and third-party hosts. Not an alias of any other entry — GLM-5, GLM-5.1, GLM-5.2 and GLM-5.3 are distinct snapshots sharing the 744B-A40B architecture.
- **Provider / access:** Z.AI API (`z.ai`), BigModel.cn (China), OpenRouter, Groq, Together, Fireworks, DeepInfra, Ollama (retired 2026-07-15), Hugging Face `zai-org/GLM-5` (weights, MIT). OpenAI-compatible chat completions; also Claude Code and OpenClaw compatible via Z.AI.
- **Release / knowledge:** released 2026-02-11 (Z.AI blog) / 2026-02-12 (community listings). Knowledge cutoff not publicly stated on the model card (Z.AI blog does not publish one; treat as unknown rather than guessing).
- **IDs:** `z-ai/glm-5` (OpenRouter), `glm-5` (Z.AI / BigModel), Hugging Face `zai-org/GLM-5` (MIT license).
- **Context window:** 200,000 tokens total / 128,000 max output (Z.AI docs; aimlapi and repo `meta.json` independently list 200K/128K). Mid-training progressively extended context from 4K to 200K using long-context agentic data. DeepSeek Sparse Attention (DSA) reduces deployment cost while preserving long-context capacity. Note: the Ollama model card's "128K+ through DSA" phrasing is a summary of the architecture, not a separate context number — the canonical figure is 200K.
- **Modalities:** text in, text out (no vision, no audio, no PDF input — this is a text-only model; the `GLM-5V-Turbo` sibling is the multimodal variant). Tool calls; structured JSON output; thinking mode (`GLM-5 (Thinking)` is the default reasoning variant used in all published benchmarks).
- **Pricing (as of 2026-10-18):** $1.00 in / $3.20 out per 1M tokens (Artificial Analysis median across 6 providers; repo `meta.json` matches). OpenRouter shows similar. No free tier on Z.AI API (`noFreeId: true` in repo meta). Self-hosting possible (MIT weights, 744B total / 40B active, BF16 and FP8 checkpoints on Hugging Face and ModelScope).
- **Architecture:** open-weights MoE, 744B total parameters / 40B active, 28.5T pre-training tokens (up from GLM-4.5's 355B/32B/23T). 256 experts, 80 layers, DeepSeek Sparse Attention, sliding-window + full-attention layer pattern (final pattern published in the arXiv paper). Post-trained with asynchronous RL infrastructure. MIT license.

### Raw benchmarks found

> Vendor-reported figures below come from the Z.AI launch blog, Hugging Face model card, and arXiv paper (2602.15763), all dated 2026-02. Independent numbers (Artificial Analysis, BenchLM, LMArena via llm.ing) are marked as such. Where the arXiv paper and the HF card disagree slightly (Tool-Decathlon 39.2 vs 38.0), both are listed.

Agent / tool use:

- τ²-Bench: **89.7%** (Z.AI launch chart; vs Claude Opus 4.5's 91.6, Gemini 3 Pro 90.7, GPT-5.2 xhigh 85.5 — GLM-5 is close to frontier here)
- BrowseComp: **62.0** (Z.AI; **75.9** with context management; BrowseComp-Zh **72.7**)
- MCP-Atlas (public set): **67.8** (Z.AI; vs Opus 4.5's 65.2, GPT-5.2's 68.0 — competitive)
- Tool-Decathlon: **39.2** (Z.AI blog) / **38.0** (HF card) — minor internal discrepancy
- Vending Bench 2: **$4,432.12** final balance, **#1 among open-source models** at launch (Z.AI; Opus 4.5 finished $4,967.06, GPT-5.2 $3,591.33)
- Terminal-Bench 2.0 (Terminus-2 harness): **56.2%** raw / **60.7%** on verified set (ambiguous instructions fixed) — Z.AI
- Terminal-Bench 2.0 (Claude Code 2.1.14): **56.2%** raw / **61.1%** verified, averaged over 5 runs — Z.AI
- Terminal-Bench 2.1: **no verified public score found** for the base GLM-5 snapshot (Z.AI published TB2.1 only for GLM-5.1: 62.0, and GLM-5.2: 81.0)
- CyberGym (Claude Code 2.1.18): **43.2%** (Z.AI; vs Opus 4.5's 50.6, Gemini 3 Pro 39.9)
- GDPval-AA Elo: **no verified public score found** (the arXiv paper notes GDPval-AA Elo was recorded on 2026-02-15 but does not publish the value in accessible excerpts)
- LMArena Code Arena: **#1 open model** at launch (Z.AI claim; current rank not separately tracked in accessible sources)

Reasoning / knowledge:

- Humanity's Last Exam: **30.5%** raw / **50.4%** with tools (Z.AI; Opus 4.5 full-set 43.4*, Gemini 3 Pro 45.8* — GLM-5's with-tools number is competitive but raw is mid-pack)
- AIME 2026 I: **92.7%** (Z.AI; saturated — nearly every frontier model scores 92–93)
- HMMT Feb. 2025: **97.9%** / HMMT Nov. 2025: **96.9%** (Z.AI)
- IMO-AnswerBench: **82.5%** (Z.AI)
- GPQA-Diamond: **86.0%** (Z.AI; vs Opus 4.5's 87.0, Gemini 3 Pro 91.9, GPT-5.2 xhigh 92.4 — solid but below frontier on hard science)
- SimpleQA: **36.0%** (HF card)
- LongBench v2: **64.5%** (arXiv paper; vs GLM-4.7's 59.1, GPT-5.2's 59.8 — strong long-context comprehension)
- Artificial Analysis Intelligence Index v4.0: **50** (Z.AI / arXiv claim: "first open-weights model to score 50"); the current AA page (v4.3 snapshot, 2026-10) shows **28** for GLM-5 (estimated) — the two numbers are on different Index versions and are not directly comparable; both cited
- BenchLM overall: **54.83 / 100**, rank **#69 / 954** (BenchLM, supported-ranked, 3 source families, 2026-10-16 update)
- LMArena Text Arena: **#1 open model at launch** (Z.AI claim); currently **Elo 1446**, rank ~31/114 (llm.ing LMArena snapshot, 2026-10-13) — the open-weights lead has since been taken by GLM-5.3 (Elo 1482)

Coding:

- SWE-bench Verified: **77.8%** (Z.AI, OpenHands harness, tailored prompt, 200K context); BenchLM also carries **72.8%** (SWE-V*) for a different harness/effort variant — both listed
- SWE-bench Multilingual: **73.3%** (Z.AI)
- SWE-bench Pro: **55.1%** (BenchLM sourced)
- LiveCodeBench: **no verified public score found** for GLM-5 base
- SciCode: **no verified public score found** for GLM-5 base

Multimodal:

- This model is text-only. No vision, audio, or PDF input benchmarks apply. The multimodal sibling in the family is `GLM-5V-Turbo` (BenchLM overall 49.6), which is a separate entry.

Long context:

- RULER, MRCR, HELMET-ICL, RepoQA: the arXiv paper publishes these only for GLM-9B architecture ablations (e.g. RULER 64K/128K: 85.35/75.28 for GLM-9B), not for the full GLM-5 model — **no verified public score found** for GLM-5 itself on these suites. LongBench v2 64.5% (above) is the best available long-context signal.

### Scores

- **Tool use: 72/100.** τ²-Bench 89.7 and BrowseComp 62.0 are close to frontier; MCP-Atlas 67.8 is competitive with Opus 4.5; Vending Bench 2 was #1 open-source at launch. Offsets: Tool-Decathlon 39.2 is mid, Terminal-Bench 2.0 56.2 trails frontier by ~13 points, and no TB2.1 score exists for this snapshot.
- **Reasoning: 80/100.** AIME 92.7 and HMMT 96.9–97.9 are near-saturated; HLE w/tools 50.4 is competitive; AA Index v4.0 score of 50 was a genuine open-weights milestone at launch. Offsets: GPQA 86.0 is clearly below Gemini 3 Pro (91.9) and GPT-5.2 (92.4); raw HLE 30.5 is mid-pack; the current AA v4.3 estimate of 28 and BenchLM overall 54.83 reflect that by October 2026 the model has slipped behind the current open-weights frontier (GLM-5.3, MiMo-V2.6-Pro).
- **Context window: 70/100.** 200K / 128K out is solid and was frontier-adjacent in February 2026; DSA keeps long-context deployment cost reasonable; LongBench v2 64.5% is strong. Offsets: by October 2026, 1M+ context is common among frontier models (Opus 4.7, Gemini 3.x, GPT-5.x, GLM-5.3 all at 1M); no published RULER/MRCR scores for the full model to verify real-world long-context fidelity.
- **Multimodal: 5/100.** Text-only. No vision, audio, or PDF input. The family's multimodal variant is a separate model (GLM-5V-Turbo).
- **Coding: 76/100.** SWE-bench Verified 77.8% and SWE-bench Multilingual 73.3% were open-source SOTA at launch, genuinely closing the gap to Opus 4.5 (80.9). Offsets: Terminal-Bench 2.0 56.2% trails frontier by ~13 points, CyberGym 43.2% is mid, and by October 2026 GLM-5.2 (TB2.1 81.0) and GLM-5.3 have moved well ahead. BenchLM coding category average of 38/100 reflects the mixed profile.
- **Cost efficiency: 88/100.** $1.00/$3.20 per 1M is ~5x cheaper than Opus 4.7 ($5/$25) and ~8x cheaper than GPT-5.1 ($4.40/$17.60 effective). MIT weights allow self-hosting. AA measured 79.8 tok/s (rank 28/74 across providers). Offsets: 744B total parameters makes local deployment expensive; no free API tier.
- **Overall Score: 61/100.** Half-up mean of Tool use (72), Reasoning (80), Context window (70), Multimodal (5), Coding (76) = 303/5 = 60.6 → 61. Cost efficiency (88) is excluded per `model-comparison.md` methodology.

### Caveats and conflicts

- **AA Intelligence Index:** Z.AI and the arXiv paper claim a score of 50 on Index v4.0 ("first open-weights model to reach 50"). The current Artificial Analysis page (v4.3, October 2026) shows **28** for GLM-5 (estimated). These are different Index versions with different scales and are not directly comparable — the v4.0 milestone was real at launch, and the v4.3 number reflects both the version change and the model's age relative to the current frontier.
- **Tool-Decathlon:** the Z.AI blog says 39.2; the Hugging Face model card says 38.0. Minor discrepancy, both vendor-sourced; neither independently verified.
- **SWE-bench Verified:** Z.AI reports 77.8% (OpenHands, tailored prompt); BenchLM carries a second figure of 72.8% (SWE-V*) from a different harness/effort configuration. Both are listed; the 77.8% figure is the one cited in most secondary coverage.
- **Terminal-Bench 2.1:** no public score exists for the base GLM-5 snapshot. Z.AI only published TB2.1 for GLM-5.1 (62.0) and GLM-5.2 (81.0). Do not attribute those to GLM-5.
- **Long-context benchmarks (RULER / MRCR / HELMET-ICL / RepoQA):** the arXiv paper publishes these only for GLM-9B architecture ablations, not for the full GLM-5 model. No verified full-model scores found.
- **Knowledge cutoff:** not publicly stated by Z.AI on the model card or blog. Treated as unknown.
- **Ollama retirement:** the Ollama registry entry for `glm-5` was retired on 2026-07-15 (replaced by newer GLM-5.x snapshots). This does not affect Z.AI API or Hugging Face availability.
- **LMArena rank drift:** GLM-5 was #1 open model on LMArena Text and Code at launch (Feb 2026). By October 2026 it sits at Elo ~1446 (rank ~31), behind GLM-5.3 (1482) and many closed models. The launch claim was accurate for its time; the current rank reflects model aging, not a correction.

### Sources

- Z.AI launch blog (2026-02-11): https://z.ai/blog/glm-5?id=GLM5
- Z.AI developer docs: https://docs.z.ai/guides/llm/glm-5
- Hugging Face model card: https://huggingface.co/zai-org/GLM-5
- arXiv paper 2602.15763 "GLM-5: from Vibe Coding to Agentic Engineering": https://arxiv.org/html/2602.15763
- GitHub README (zai-org/GLM-5): https://github.com/zai-org/GLM-5
- Artificial Analysis model page (via search snippets): https://artificialanalysis.ai/models/glm-5
- BenchLM GLM-5 profile: https://benchlm.ai/models/glm-5
- llm.ing LMArena Text snapshot: https://llm.ing/benchmarks/lmarena-text
- Ollama registry (retired): https://registry.ollama.com/library/glm-5

**Big Pickle (opencode/big-pickle)** — 2026-10-18
